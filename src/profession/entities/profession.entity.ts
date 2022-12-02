import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma, Profession as PrismaObject } from '@prisma/client';

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
import { Profession } from '../dtos/profession.dto';
import {
  CreateProfessionInputDto,
  ProfessionSortInputDto,
  ProfessionWhereInputDto,
  UpdateProfessionInputDto,
} from '../inputs/profession.input';

@ObjectType()
export class ProfessionEntity extends AbstractEntity {
  @Field()
  professionCategoryCode: string;

  @Field()
  professionCategoryLabel: string;

  @Field()
  professionCode: string;

  @Field()
  professionLabel: string;

  constructor(prisma: PrismaService | Prisma.TransactionClient) {
    super(prisma, 'kh', ProfessionEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.ProfessionWhereUniqueInput>,
  ) => new ProfessionEntity(prismaService).init(init);

  setData(data: PrismaObject | Profession.DTO): ProfessionEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): Profession.DTO {
    return {
      ...super.toObject(),
      professionCategoryCode: this.professionCategoryCode,
      professionCategoryLabel: this.professionCategoryLabel,
      professionCode: this.professionCode,
      professionLabel: this.professionLabel,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.ProfessionWhereUniqueInput>,
  ): Promise<ProfessionEntity> {
    const { where, include } = init;
    try {
      const object = await this.prismaService.profession.findUnique({
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
        ErrorEnum.PROFESSION_NOT_FOUND,
      );
    }
  }

  async create(data: CreateProfessionInputDto): Promise<ProfessionEntity> {
    try {
      const object = await this.prismaService.profession.create({
        data: {
          ...omit(data, ['healthProfessionalId']),
          id: this.generateId(),
        },
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_PROFESSION_ERROR,
      );
    }
  }

  async getOrCreate(data: CreateProfessionInputDto): Promise<ProfessionEntity> {
    try {
      const object = await this.prismaService.profession.upsert({
        where: {
          professionCategoryCode_professionCode: {
            professionCategoryCode: data.professionCategoryCode,
            professionCode: data.professionCode,
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
        ErrorEnum.CREATE_PROFESSION_ERROR,
      );
    }
  }

  async update(
    where: Prisma.ProfessionWhereUniqueInput,
    data: UpdateProfessionInputDto,
  ): Promise<ProfessionEntity> {
    try {
      const object = await this.prismaService.profession.update({
        where,
        data,
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_PROFESSION_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.ProfessionWhereUniqueInput,
  ): Promise<ProfessionEntity> {
    try {
      const rslt = await this.prismaService.profession.delete({
        where,
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_PROFESSION_ERROR,
      );
    }
  }
}

@ObjectType()
export class ProfessionArrayEntity extends AbstractArrayEntity {
  @Field(() => [ProfessionEntity])
  data: Profession.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (
  //   where?: ProfessionWhereInputDto,
  // ): Prisma.ProfessionWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: ProfessionWhereInputDto,
    sort?: ProfessionSortInputDto,
    pagination?: GetManyCommonPaginationDto,
  ): Promise<ProfessionArrayEntity> => {
    try {
      this.data = await this.prisma.profession.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.profession.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(error, ProfessionEntity.name).throwError(
        ErrorEnum.FIND_PROFESSION_ERROR,
      );
    }
  };
}
