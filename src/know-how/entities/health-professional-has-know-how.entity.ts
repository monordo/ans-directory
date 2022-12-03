import { Field, ObjectType } from '@nestjs/graphql';
import {
  Prisma,
  HealthProfessionalHasKnowHow as PrismaObject,
} from '@prisma/client';

import * as _ from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasKnowHow } from '../dtos/health-professional-has-know-how.dto';
import { KnowHow } from '../dtos/know-how.dto';
import {
  CreateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowPaginationDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
} from '../inputs/health-professional-has-know-how.input';
import { KnowHowEntity } from './know-how.entity';

@ObjectType()
export class HealthProfessionalHasKnowHowEntity extends AbstractEntity {
  @Field(() => KnowHowEntity, { nullable: true })
  knowHow?: KnowHow.DTO;

  @Field()
  healthProfessionalId: string;

  @Field()
  knowHowId: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'hp_kh', HealthProfessionalHasKnowHowEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.HealthProfessionalHasKnowHowWhereUniqueInput>,
  ) => new HealthProfessionalHasKnowHowEntity(prismaService).init(init);

  setData(
    data: PrismaObject | HealthProfessionalHasKnowHow.DTO,
  ): HealthProfessionalHasKnowHowEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): HealthProfessionalHasKnowHow.DTO {
    return {
      ...super.toObject(),
      knowHow: this.knowHow,
      healthProfessionalId: this.healthProfessionalId,
      knowHowId: this.knowHowId,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.HealthProfessionalHasKnowHowWhereUniqueInput>,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    const { where, include } = init;
    try {
      const object =
        await this.prismaService.healthProfessionalHasKnowHow.findUnique({
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
        ErrorEnum.HEALTH_PROFESSIONAL_HAS_KNOW_HOW_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasKnowHow.create({
          data: {
            id: this.generateId(),
            healthProfessional: { connect: data.healthProfessional },
            knowHow: { connect: data.knowHow },
          },
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR,
      );
    }
  }

  async getOrCreate(
    data: Prisma.HealthProfessionalHasKnowHowHealthProfessionalIdKnowHowIdCompoundUniqueInput,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasKnowHow.upsert({
          where: { healthProfessionalId_knowHowId: data },
          create: {
            id: this.generateId(),
            healthProfessional: {
              connect: {
                id: data.healthProfessionalId,
              },
            },
            knowHow: {
              connect: {
                id: data.knowHowId,
              },
            },
          },
          update: {},
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR,
      );
    }
  }

  async update(
    where: Prisma.HealthProfessionalHasKnowHowWhereUniqueInput,
    data: UpdateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    try {
      const { healthProfessional, knowHow } = data;
      const object =
        await this.prismaService.healthProfessionalHasKnowHow.update({
          where,
          data: {
            healthProfessional: healthProfessional
              ? { connect: healthProfessional }
              : undefined,
            knowHow: knowHow ? { connect: knowHow } : undefined,
          },
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.HealthProfessionalHasKnowHowWhereUniqueInput,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    try {
      const rslt = await this.prismaService.healthProfessionalHasKnowHow.delete(
        {
          where,
        },
      );
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR,
      );
    }
  }
}

@ObjectType()
export class HealthProfessionalHasKnowHowArrayEntity extends AbstractArrayEntity {
  @Field(() => [HealthProfessionalHasKnowHowEntity])
  data: HealthProfessionalHasKnowHow.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  get = async (
    where?: HealthProfessionalHasKnowHowWhereInputDto,
    sort?: HealthProfessionalHasKnowHowSortInputDto,
    pagination?: HealthProfessionalHasKnowHowPaginationDto,
  ): Promise<HealthProfessionalHasKnowHowArrayEntity> => {
    try {
      this.data = await this.prisma.healthProfessionalHasKnowHow.findMany({
        where,
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.healthProfessionalHasKnowHow.count({
        where,
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(
        error,
        HealthProfessionalHasKnowHowEntity.name,
      ).throwError(ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_KNOW_HOW_ERROR);
    }
  };
}
