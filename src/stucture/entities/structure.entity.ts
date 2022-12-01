import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma, Structure as PrismaObject } from '@prisma/client';

import * as _ from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActivitySector } from '../dtos/activity-sector.dto';
import { Activity } from '../dtos/activity.dto';
import { RegistrationAuthority } from '../dtos/registration-authority.dto';
import { Structure } from '../dtos/structure.dto';
import {
  StructurePaginationDto,
  StructureSortInputDto,
  StructureWhereInputDto,
} from '../inputs/filters-structure.input';
import {
  CreateStructureInputDto,
  UniqueStructureInputDto,
  UpdateStructureInputDto,
} from '../inputs/structure.input';

const createOrUndefined = <T, U>(
  value: T | undefined,
  id: string,
  uniqueKey: string,
  createMode?: true,
): U => {
  if (value) {
    return {
      connectOrCreate: {
        where: { [uniqueKey]: value[uniqueKey] },
        create: { ...value, id: id },
      },
    } as U;
  }
  if (value === null && !createMode) {
    return {
      disconnect: true,
    } as U;
  }
  return undefined;
};

@ObjectType()
export class StructureEntity extends AbstractEntity {
  @Field()
  SIRET: string;

  @Field({ nullable: true })
  SIREN?: string;

  @Field({ nullable: true })
  FINESS?: string;

  @Field({ nullable: true })
  legalFINESS?: string;

  @Field({ nullable: true })
  technicalId?: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field({ nullable: true })
  comercialSign?: string;

  @Field(() => [String])
  oldIdentifiers: string[];

  @Field({ nullable: true })
  sectorId?: string;

  @Field(() => ActivitySector.ActivitySector, { nullable: true })
  sector?: ActivitySector.DTO;

  @Field({ nullable: true })
  activityId?: string;

  @Field(() => Activity.Activity, { nullable: true })
  activity?: Activity.DTO;

  @Field({ nullable: true })
  registrationAuthorityId?: string;

  @Field(() => RegistrationAuthority.RegistrationAuthority, {
    nullable: true,
  })
  registrationAuthority?: RegistrationAuthority.DTO;

  constructor(prisma: PrismaService) {
    super(prisma, 'ste', StructureEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<
      Prisma.StructureWhereUniqueInput,
      Prisma.StructureInclude
    >,
  ) => new StructureEntity(prismaService).init(init);

  setData(data: PrismaObject | Structure.DTO): StructureEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): Structure.DTO {
    return {
      ...super.toObject(),
      SIRET: this.SIRET,
      SIREN: this.SIREN,
      FINESS: this.FINESS,
      legalFINESS: this.legalFINESS,
      technicalId: this.technicalId,
      companyName: this.companyName,
      comercialSign: this.comercialSign,
      oldIdentifiers: this.oldIdentifiers,
      sectorId: this.sectorId,
      sector: this.sector,
      activityId: this.activityId,
      activity: this.activity,
      registrationAuthorityId: this.registrationAuthorityId,
      registrationAuthority: this.registrationAuthority,
    };
  }

  defaultIncludes = (include?: Prisma.StructureInclude) => ({
    ...include,
    sector: true,
    activity: true,
    registrationAuthority: true,
  });

  private formatOldIdentifiers = async (
    unique: UniqueStructureInputDto,
    newOldIdentifiers?: string[],
  ): Promise<string[] | undefined> => {
    if (newOldIdentifiers) {
      let formatedOldIdentifiers = newOldIdentifiers ?? [];
      const elem = await this.init({
        where: unique,
        throwError: false,
      });
      if (elem)
        formatedOldIdentifiers = [
          ...new Set([...newOldIdentifiers, ...elem.oldIdentifiers]),
        ];
      return formatedOldIdentifiers;
    }
    return undefined;
  };

  async init(
    init: EntityInitArgs<
      Prisma.StructureWhereUniqueInput,
      Prisma.StructureInclude
    >,
  ): Promise<StructureEntity> {
    const { where, include, throwError } = init;
    try {
      const object = await this.prismaService.structure.findUnique({
        where,
        include: this.defaultIncludes(include),
      });
      if (!object && throwError !== false)
        throw new Error(
          `${this.entityName} with: ${JSON.stringify(where)}, not found`,
        );
      return object ? this.setData(object) : null;
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.STRUCTURE_NOT_FOUND,
      );
      return null;
    }
  }

  async create(data: CreateStructureInputDto): Promise<StructureEntity> {
    try {
      const { sector, activity, registrationAuthority, ...rest } = data;
      const object = await this.prismaService.structure.create({
        data: {
          ...rest,
          id: this.generateId(),
          sector: createOrUndefined(
            sector,
            this.generateId('aty_sctr'),
            'sectorCode',
            true,
          ),
          activity: createOrUndefined(
            activity,
            this.generateId('aty'),
            'activityCode',
            true,
          ),
          registrationAuthority: createOrUndefined(
            registrationAuthority,
            this.generateId('rgr_auth'),
            'name',
            true,
          ),
        },
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_STRUCTURE_ERROR,
      );
    }
  }

  async updateOrcreate(
    data: CreateStructureInputDto,
  ): Promise<StructureEntity> {
    try {
      const {
        sector,
        activity,
        registrationAuthority,
        oldIdentifiers,
        ...rest
      } = data;
      const fmtOldIdentifiers = await this.formatOldIdentifiers(
        { SIRET: data.SIRET },
        oldIdentifiers,
      );
      const insert = {
        ...rest,
        sector: createOrUndefined(
          sector,
          this.generateId('aty_sctr'),
          'sectorCode',
        ),
        activity: createOrUndefined(
          activity,
          this.generateId('aty'),
          'activityCode',
        ),
        registrationAuthority: createOrUndefined(
          registrationAuthority?.name,
          this.generateId('rgr_auth'),
          'name',
        ),
        oldIdentifiers: fmtOldIdentifiers
          ? { set: fmtOldIdentifiers }
          : undefined,
      };
      const object = await this.prismaService.structure.upsert({
        where: { SIRET: data.SIRET },
        create: {
          ...insert,
          id: this.generateId(),
        },
        update: insert,
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_STRUCTURE_ERROR,
      );
    }
  }

  async update(
    where: Prisma.StructureWhereUniqueInput,
    data: UpdateStructureInputDto,
  ): Promise<StructureEntity> {
    try {
      const {
        sector,
        activity,
        registrationAuthority,
        oldIdentifiers,
        ...rest
      } = data;
      const insert = {
        ...rest,
        sector: createOrUndefined(
          sector,
          this.generateId('aty_sctr'),
          'sectorCode',
        ),
        activity: createOrUndefined(
          activity,
          this.generateId('aty'),
          'activityCode',
        ),
        registrationAuthority: createOrUndefined(
          registrationAuthority?.name,
          this.generateId('rgr_auth'),
          'name',
        ),
        oldIdentifiers: oldIdentifiers ? { set: oldIdentifiers } : undefined,
      };
      const object = await this.prismaService.structure.update({
        where,
        data: insert,
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      console.log(error);
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_STRUCTURE_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.StructureWhereUniqueInput,
  ): Promise<StructureEntity> {
    try {
      const rslt = await this.prismaService.structure.delete({
        where,
        include: this.defaultIncludes(),
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_STRUCTURE_ERROR,
      );
    }
  }
}

@ObjectType()
export class StructureArrayEntity extends AbstractArrayEntity {
  @Field(() => [StructureEntity])
  data: Structure.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (where?: StructureWhereInputDto): Prisma.StructureWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: StructureWhereInputDto,
    sort?: StructureSortInputDto,
    pagination?: StructurePaginationDto,
  ): Promise<StructureArrayEntity> => {
    try {
      this.data = await this.prisma.structure.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.structure.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(error, StructureEntity.name).throwError(
        ErrorEnum.FIND_STRUCTURE_ERROR,
      );
    }
  };
}
