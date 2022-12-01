import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma, PharmacistInformation as PrismaObject } from '@prisma/client';
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
import { PharmacistInformation } from '../dtos/pharmacist-information.dto';
import {
  CreatePharmacistInformationInputDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationWhereInputDto,
  UpdatePharmacistInformationInputDto,
} from '../inputs/pharmacist-information.input';

@ObjectType()
export class PharmacistInformationEntity extends AbstractEntity {
  @Field()
  sectionCode: string;

  @Field()
  sectionLabel: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'phmt_inf', PharmacistInformationEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.PharmacistInformationWhereUniqueInput>,
  ) => new PharmacistInformationEntity(prismaService).init(init);

  setData(
    data: PrismaObject | PharmacistInformation.DTO,
  ): PharmacistInformationEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): PharmacistInformation.DTO {
    return {
      ...super.toObject(),
      sectionCode: this.sectionCode,
      sectionLabel: this.sectionLabel,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.PharmacistInformationWhereUniqueInput>,
  ): Promise<PharmacistInformationEntity> {
    const { where, include } = init;
    try {
      const object = await this.prismaService.pharmacistInformation.findUnique({
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
        ErrorEnum.PHARMACIST_INFORMATION_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    try {
      const object = await this.prismaService.pharmacistInformation.create({
        data: {
          ...omit(data, ['healthProfessionalId']),
          id: this.generateId(),
        },
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async getOrCreate(
    data: CreatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    try {
      const object = await this.prismaService.pharmacistInformation.upsert({
        where: {
          sectionCode: data.sectionCode,
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
        ErrorEnum.CREATE_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async update(
    where: Prisma.PharmacistInformationWhereUniqueInput,
    data: UpdatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    try {
      const object = await this.prismaService.pharmacistInformation.update({
        where,
        data,
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.PharmacistInformationWhereUniqueInput,
  ): Promise<PharmacistInformationEntity> {
    try {
      const rslt = await this.prismaService.pharmacistInformation.delete({
        where,
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }
}

@ObjectType()
export class PharmacistInformationArrayEntity extends AbstractArrayEntity {
  @Field(() => [PharmacistInformationEntity])
  data: PharmacistInformation.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (where?: PharmacistInformationWhereInputDto): Prisma.PharmacistInformationWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: PharmacistInformationWhereInputDto,
    sort?: PharmacistInformationSortInputDto,
    pagination?: GetManyCommonPaginationDto,
  ): Promise<PharmacistInformationArrayEntity> => {
    try {
      this.data = await this.prisma.pharmacistInformation.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.pharmacistInformation.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(
        error,
        PharmacistInformationEntity.name,
      ).throwError(ErrorEnum.FIND_PHARMACIST_INFORMATION_ERROR);
    }
  };
}
