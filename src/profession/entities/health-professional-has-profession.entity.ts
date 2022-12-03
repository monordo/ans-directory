import { Field, ObjectType } from '@nestjs/graphql';
import {
  Prisma,
  HealthProfessionalHasProfession as PrismaObject,
} from '@prisma/client';

import * as _ from 'lodash';
import { omit } from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { HealthProfessional } from 'src/health-professional/dtos/health-professional.dto';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasProfession } from '../dtos/health-professional-has-profession.dto';
import { Profession } from '../dtos/profession.dto';
import {
  CreateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionPaginationDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
} from '../inputs/health-professional-has-profession.input';
import { ProfessionEntity } from './profession.entity';

@ObjectType()
export class HealthProfessionalHasProfessionEntity extends AbstractEntity {
  @Field(() => ProfessionEntity, { nullable: true })
  profession?: Profession.DTO;

  @Field()
  healthProfessionalId: string;

  @Field()
  professionId: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'hp_kh', HealthProfessionalHasProfessionEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.HealthProfessionalHasProfessionWhereUniqueInput>,
  ) => new HealthProfessionalHasProfessionEntity(prismaService).init(init);

  setData(
    data: PrismaObject | HealthProfessionalHasProfession.DTO,
  ): HealthProfessionalHasProfessionEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): HealthProfessionalHasProfession.DTO {
    return {
      ...super.toObject(),
      profession: this.profession,
      healthProfessionalId: this.healthProfessionalId,
      professionId: this.professionId,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.HealthProfessionalHasProfessionWhereUniqueInput>,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    const { where, include } = init;
    try {
      const object =
        await this.prismaService.healthProfessionalHasProfession.findUnique({
          where,
          include,
        });
      if (!object)
        throw new Error(
          `${this.entityName} with: ${JSON.stringify(where)}, not found`,
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.HEALTH_PROFESSIONAL_HAS_PROFESSION_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreateHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasProfession.create({
          data: {
            id: this.generateId(),
            healthProfessional: { connect: data.healthProfessional },
            profession: { connect: data.profession },
          },
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR,
      );
    }
  }

  async getOrCreate(
    data: Prisma.HealthProfessionalHasProfessionHealthProfessionalIdProfessionIdCompoundUniqueInput,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasProfession.upsert({
          where: { healthProfessionalId_professionId: data },
          create: {
            id: this.generateId(),
            healthProfessional: {
              connect: {
                id: data.healthProfessionalId,
              },
            },
            profession: {
              connect: {
                id: data.professionId,
              },
            },
          },
          update: {},
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR,
      );
    }
  }

  async update(
    where: Prisma.HealthProfessionalHasProfessionWhereUniqueInput,
    data: UpdateHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    try {
      const { healthProfessional, profession } = data;
      const object =
        await this.prismaService.healthProfessionalHasProfession.update({
          where,
          data: {
            healthProfessional: healthProfessional
              ? { connect: healthProfessional }
              : undefined,
            profession: profession ? { connect: profession } : undefined,
          },
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.HealthProfessionalHasProfessionWhereUniqueInput,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    try {
      const rslt =
        await this.prismaService.healthProfessionalHasProfession.delete({
          where,
        });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR,
      );
    }
  }
}

@ObjectType()
export class HealthProfessionalHasProfessionArrayEntity extends AbstractArrayEntity {
  @Field(() => [HealthProfessionalHasProfessionEntity])
  data: HealthProfessionalHasProfession.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (
  //   where?: HealthProfessionalHasProfessionWhereInputDto,
  // ): Prisma.HealthProfessionalHasProfessionWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: HealthProfessionalHasProfessionWhereInputDto,
    sort?: HealthProfessionalHasProfessionSortInputDto,
    pagination?: HealthProfessionalHasProfessionPaginationDto,
  ): Promise<HealthProfessionalHasProfessionArrayEntity> => {
    try {
      this.data = await this.prisma.healthProfessionalHasProfession.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.healthProfessionalHasProfession.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(
        error,
        HealthProfessionalHasProfessionEntity.name,
      ).throwError(ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_PROFESSION_ERROR);
    }
  };
}
