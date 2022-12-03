import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { Prisma, HealthProfessional as PrismaObject } from '@prisma/client';

import * as _ from 'lodash';
import { omit } from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { HealthProfessionalHasKnowHow } from 'src/know-how/dtos/health-professional-has-know-how.dto';
import { HealthProfessionalHasKnowHowEntity } from 'src/know-how/entities/health-professional-has-know-how.entity';
import { HealthProfessionalHasPharmacistInformation } from 'src/pharmacist-information/dtos/health-professional-has-pharmacist-information.dto';
import { HealthProfessionalHasPharmacistInformationEntity } from 'src/pharmacist-information/entities/health-professional-has-pharmacist-information.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasProfession } from 'src/profession/dtos/health-professional-has-profession.dto';
import { HealthProfessionalHasProfessionEntity } from 'src/profession/entities/health-professional-has-profession.entity';
import { HealthProfessionalHasStructure } from 'src/stucture/dtos/health-professional-has-structure.dto';
import { HealthProfessionalHasStructureEntity } from 'src/stucture/entities/health-professional-has-structure.entity';
import { HealthProfessional } from '../dtos/health-professional.dto';
import {
  HealthProfessionalPaginationDto,
  HealthProfessionalSortInputDto,
  HealthProfessionalWhereInputDto,
} from '../inputs/filters-health-professional.input';
import {
  CreateHealthProfessionalInputDto,
  UpdateHealthProfessionalInputDto,
} from '../inputs/health-professional.input';

@ObjectType()
export class HealthProfessionalEntity extends AbstractEntity {
  @Field({ nullable: true })
  PPIdentifierType?: string;

  @Field()
  PPIdentifier: string;

  @Field()
  nationalPPIdentifier: string;

  @Field({ nullable: true })
  practiceCivilityCode?: string;

  @Field({ nullable: true })
  practiceCivilityLabel?: string;

  @Field({ nullable: true })
  civilityCode?: string;

  @Field({ nullable: true })
  civilityLabel?: string;

  @Field()
  lastname: string;

  @Field()
  firstname: string;

  @Field(() => [HealthProfessionalHasKnowHowEntity], { nullable: true })
  knowHow?: HealthProfessionalHasKnowHow.DTO[];

  @Field(() => [HealthProfessionalHasProfessionEntity], { nullable: true })
  professions?: HealthProfessionalHasProfession.DTO[];

  @Field(() => [HealthProfessionalHasPharmacistInformationEntity], {
    nullable: true,
  })
  pharinformations?: HealthProfessionalHasPharmacistInformation.DTO[];

  @Field(() => [HealthProfessionalHasStructureEntity], { nullable: true })
  structures?: HealthProfessionalHasStructure.DTO[];

  constructor(prisma: PrismaService | Prisma.TransactionClient) {
    super(prisma, 'hp', HealthProfessionalEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.HealthProfessionalWhereUniqueInput>,
  ) => new HealthProfessionalEntity(prismaService).init(init);

  setData(
    data: PrismaObject | HealthProfessional.DTO,
  ): HealthProfessionalEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): HealthProfessional.DTO {
    return {
      ...super.toObject(),
      PPIdentifierType: this.PPIdentifierType,
      PPIdentifier: this.PPIdentifier,
      nationalPPIdentifier: this.nationalPPIdentifier,
      practiceCivilityCode: this.practiceCivilityCode,
      practiceCivilityLabel: this.practiceCivilityLabel,
      civilityCode: this.civilityCode,
      civilityLabel: this.civilityLabel,
      lastname: this.lastname,
      firstname: this.firstname,
      knowHow: this.knowHow,
      professions: this.professions,
      pharinformations: this.pharinformations,
      structures: this.structures,
    };
  }

  defaultIncludes = (): Prisma.HealthProfessionalInclude => ({
    knowHow: {
      include: { knowHow: true },
    },
    professions: {
      include: { profession: true },
    },
    pharinformations: {
      include: { pharmacistInformation: true },
    },
    structures: {
      include: { structure: true, role: true, practice: true },
    },
  });

  async init(
    init: EntityInitArgs<Prisma.HealthProfessionalWhereUniqueInput>,
  ): Promise<HealthProfessionalEntity> {
    const { where } = init;
    try {
      const object = await this.prismaService.healthProfessional.findUnique({
        where,
        include: this.defaultIncludes(),
      });
      if (!object)
        throw new Error(
          `${this.entityName} with: ${JSON.stringify(where)}, not found`,
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.HEALTH_PROFESSIONAL_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    try {
      const object = await this.prismaService.healthProfessional.create({
        data: {
          ...data,
          id: this.generateId(),
        },
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_ERROR,
      );
    }
  }

  async updateOrcreate(
    data: CreateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    try {
      const object = await this.prismaService.healthProfessional.upsert({
        where: { PPIdentifier: data.PPIdentifier },
        create: {
          ...data,
          id: this.generateId(),
        },
        update: {
          ...omit(data, [
            'PPIdentifier',
            'nationalPPIdentifier',
            'PPIdentifierType',
          ]),
        },
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      console.log(error);
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_ERROR,
      );
    }
  }

  async update(
    where: Prisma.HealthProfessionalWhereUniqueInput,
    data: UpdateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    try {
      const object = await this.prismaService.healthProfessional.update({
        where,
        data,
        include: this.defaultIncludes(),
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.HealthProfessionalWhereUniqueInput,
  ): Promise<HealthProfessionalEntity> {
    try {
      const rslt = await this.prismaService.healthProfessional.delete({
        where,
        include: this.defaultIncludes(),
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_HEALTH_PROFESSIONAL_ERROR,
      );
    }
  }
}
@ObjectType()
export class LightHealthProfessionalEntity extends OmitType(
  HealthProfessionalEntity,
  ['knowHow', 'professions', 'pharinformations', 'structures'],
) {}

@ObjectType()
export class HealthProfessionalArrayEntity extends AbstractArrayEntity {
  @Field(() => [LightHealthProfessionalEntity])
  data: HealthProfessional.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  get = async (
    where?: HealthProfessionalWhereInputDto,
    sort?: HealthProfessionalSortInputDto,
    pagination?: HealthProfessionalPaginationDto,
  ): Promise<HealthProfessionalArrayEntity> => {
    try {
      this.data = await this.prisma.healthProfessional.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.healthProfessional.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(error, HealthProfessionalEntity.name).throwError(
        ErrorEnum.FIND_HEALTH_PROFESSIONAL_ERROR,
      );
    }
  };
}
