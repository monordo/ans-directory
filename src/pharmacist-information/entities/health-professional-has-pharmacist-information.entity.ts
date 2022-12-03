import { Field, ObjectType } from '@nestjs/graphql';
import {
  Prisma,
  HealthProfessionalHasPharmacistInformation as PrismaObject,
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
import { HealthProfessionalHasPharmacistInformation } from '../dtos/health-professional-has-pharmacist-information.dto';
import { PharmacistInformation } from '../dtos/pharmacist-information.dto';
import {
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
} from '../inputs/health-professional-has-pharmacist-information.input';
import { PharmacistInformationEntity } from './pharmacist-information.entity';

@ObjectType()
export class HealthProfessionalHasPharmacistInformationEntity extends AbstractEntity {
  @Field(() => PharmacistInformationEntity, { nullable: true })
  pharmacistInformation?: PharmacistInformation.DTO;

  @Field()
  healthProfessionalId: string;

  @Field()
  pharmacistInformationId: string;

  constructor(prisma: PrismaService) {
    super(
      prisma,
      'hp_kh',
      HealthProfessionalHasPharmacistInformationEntity.name,
    );
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.HealthProfessionalHasPharmacistInformationWhereUniqueInput>,
  ) =>
    new HealthProfessionalHasPharmacistInformationEntity(prismaService).init(
      init,
    );

  setData(
    data: PrismaObject | HealthProfessionalHasPharmacistInformation.DTO,
  ): HealthProfessionalHasPharmacistInformationEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): HealthProfessionalHasPharmacistInformation.DTO {
    return {
      ...super.toObject(),
      pharmacistInformation: this.pharmacistInformation,
      healthProfessionalId: this.healthProfessionalId,
      pharmacistInformationId: this.pharmacistInformationId,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.HealthProfessionalHasPharmacistInformationWhereUniqueInput>,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    const { where, include } = init;
    try {
      const object =
        await this.prismaService.healthProfessionalHasPharmacistInformation.findUnique(
          {
            where,
            include,
          },
        );
      if (!object)
        throw new Error(
          `${this.entityName} with: ${JSON.stringify(where)}, not found`,
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreateHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasPharmacistInformation.create(
          {
            data: {
              id: this.generateId(),
              healthProfessional: { connect: data.healthProfessional },
              pharmacistInformation: { connect: data.pharmacistInformation },
            },
          },
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async getOrCreate(
    data: Prisma.HealthProfessionalHasPharmacistInformationHealthProfessionalIdPharmacistInformationIdCompoundUniqueInput,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasPharmacistInformation.upsert(
          {
            where: { healthProfessionalId_pharmacistInformationId: data },
            create: {
              id: this.generateId(),
              healthProfessional: {
                connect: {
                  id: data.healthProfessionalId,
                },
              },
              pharmacistInformation: {
                connect: {
                  id: data.pharmacistInformationId,
                },
              },
            },
            update: {},
          },
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async update(
    where: Prisma.HealthProfessionalHasPharmacistInformationWhereUniqueInput,
    data: UpdateHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    try {
      const { healthProfessional, pharmacistInformation } = data;
      const object =
        await this.prismaService.healthProfessionalHasPharmacistInformation.update(
          {
            where,
            data: {
              healthProfessional: healthProfessional
                ? { connect: healthProfessional }
                : undefined,
              pharmacistInformation: pharmacistInformation
                ? { connect: pharmacistInformation }
                : undefined,
            },
          },
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.HealthProfessionalHasPharmacistInformationWhereUniqueInput,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    try {
      const rslt =
        await this.prismaService.healthProfessionalHasPharmacistInformation.delete(
          {
            where,
          },
        );
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR,
      );
    }
  }
}

@ObjectType()
export class HealthProfessionalHasPharmacistInformationArrayEntity extends AbstractArrayEntity {
  @Field(() => [HealthProfessionalHasPharmacistInformationEntity])
  data: HealthProfessionalHasPharmacistInformation.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (
  //   where?: HealthProfessionalHasPharmacistInformationWhereInputDto,
  // ): Prisma.HealthProfessionalHasPharmacistInformationWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: HealthProfessionalHasPharmacistInformationWhereInputDto,
    sort?: HealthProfessionalHasPharmacistInformationSortInputDto,
    pagination?: HealthProfessionalHasPharmacistInformationPaginationDto,
  ): Promise<HealthProfessionalHasPharmacistInformationArrayEntity> => {
    try {
      this.data =
        await this.prisma.healthProfessionalHasPharmacistInformation.findMany({
          where, // : this.getWhere(where),
          orderBy: sort,
          skip: pagination?.skip,
          take: pagination?.take,
          cursor: pagination?.cursor,
        });
      this.count = this.data.length;
      this.total =
        await this.prisma.healthProfessionalHasPharmacistInformation.count({
          where, // : this.getWhere(where),
        });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(
        error,
        HealthProfessionalHasPharmacistInformationEntity.name,
      ).throwError(
        ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_PHARMACIST_INFORMATION_ERROR,
      );
    }
  };
}
