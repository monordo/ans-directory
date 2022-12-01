import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma, KnowHow as PrismaObject } from '@prisma/client';
import * as _ from 'lodash';
import { omit } from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { KnowHow } from '../dtos/know-how.dto';
import {
  CreateKnowHowInputDto,
  KnowHowSortInputDto,
  KnowHowWhereInputDto,
  UpdateKnowHowInputDto,
} from '../inputs/know-how.input';

@ObjectType()
export class KnowHowEntity extends AbstractEntity {
  @Field()
  knowHowTypeCode: string;

  @Field()
  knowHowTypeLabel: string;

  @Field()
  knowHowCode: string;

  @Field()
  knowHowLabel: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'kh', KnowHowEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.KnowHowWhereUniqueInput>,
  ) => new KnowHowEntity(prismaService).init(init);

  setData(data: PrismaObject | KnowHow.DTO): KnowHowEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): KnowHow.DTO {
    return {
      ...super.toObject(),
      knowHowTypeCode: this.knowHowTypeCode,
      knowHowTypeLabel: this.knowHowTypeLabel,
      knowHowCode: this.knowHowCode,
      knowHowLabel: this.knowHowLabel,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.KnowHowWhereUniqueInput>,
  ): Promise<KnowHowEntity> {
    const { where, include } = init;
    try {
      const object = await this.prismaService.knowHow.findUnique({
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
        ErrorEnum.KNOW_HOW_NOT_FOUND,
      );
    }
  }

  async create(data: CreateKnowHowInputDto): Promise<KnowHowEntity> {
    try {
      const object = await this.prismaService.knowHow.create({
        data: {
          ...omit(data, ['healthProfessionalId']),
          id: this.generateId(),
        },
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_KNOW_HOW_ERROR,
      );
    }
  }

  async getOrCreate(data: CreateKnowHowInputDto): Promise<KnowHowEntity> {
    try {
      const object = await this.prismaService.knowHow.upsert({
        where: {
          knowHowTypeCode_knowHowCode: {
            knowHowTypeCode: data.knowHowTypeCode,
            knowHowCode: data.knowHowCode,
          },
        },
        create: {
          ...omit(data, ['healthProfessionalId']),
          id: this.generateId(),
        },
        update: {},
      });
      return this.setData(object);
    } catch (error) {
      console.log(error);
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_KNOW_HOW_ERROR,
      );
    }
  }

  async update(
    where: Prisma.KnowHowWhereUniqueInput,
    data: UpdateKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    try {
      const object = await this.prismaService.knowHow.update({
        where,
        data,
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_KNOW_HOW_ERROR,
      );
    }
  }

  async delete(where: Prisma.KnowHowWhereUniqueInput): Promise<KnowHowEntity> {
    try {
      const rslt = await this.prismaService.knowHow.delete({
        where,
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_KNOW_HOW_ERROR,
      );
    }
  }
}

@ObjectType()
export class KnowHowArrayEntity extends AbstractArrayEntity {
  @Field(() => [KnowHowEntity])
  data: KnowHow.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (where?: KnowHowWhereInputDto): Prisma.KnowHowWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: KnowHowWhereInputDto,
    sort?: KnowHowSortInputDto,
    pagination?: GetManyCommonPaginationDto,
  ): Promise<KnowHowArrayEntity> => {
    try {
      this.data = await this.prisma.knowHow.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.knowHow.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(error, KnowHowEntity.name).throwError(
        ErrorEnum.FIND_KNOW_HOW_ERROR,
      );
    }
  };
}
