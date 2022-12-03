import { Field, ObjectType } from '@nestjs/graphql';
import {
  Prisma,
  HealthProfessionalHasStructure as PrismaObject,
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
import { HealthProfessionalHasStructure } from '../dtos/health-professional-has-structure.dto';
import { Practice } from '../dtos/practice.dto';
import { Role } from '../dtos/role.dto';
import { Structure } from '../dtos/structure.dto';
import {
  CreateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructurePaginationDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructureWhereInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
} from '../inputs/health-professional-has-structure.input';
import { StructureEntity } from './structure.entity';

@ObjectType()
export class HealthProfessionalHasStructureEntity extends AbstractEntity {
  @Field(() => StructureEntity, { nullable: true })
  structure?: Structure.DTO;

  @Field(() => Practice.Practice, { nullable: true })
  practice?: Practice.DTO;

  @Field(() => Role.Role, { nullable: true })
  role?: Role.DTO;

  @Field()
  healthProfessionalId: string;

  @Field()
  structureId: string;

  @Field({ nullable: true })
  roleId?: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'hp_ste', HealthProfessionalHasStructureEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.HealthProfessionalHasStructureWhereUniqueInput>,
  ) => new HealthProfessionalHasStructureEntity(prismaService).init(init);

  setData(
    data: PrismaObject | HealthProfessionalHasStructure.DTO,
  ): HealthProfessionalHasStructureEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): HealthProfessionalHasStructure.DTO {
    return {
      ...super.toObject(),
      healthProfessionalId: this.healthProfessionalId,
      structureId: this.structureId,
      roleId: this.roleId,
      structure: this.structure,
      practice: this.practice,
      role: this.role,
    };
  }

  defaultIncludes = (
    include?: Prisma.HealthProfessionalHasStructureInclude,
  ): Prisma.HealthProfessionalHasStructureInclude => ({
    ...include,
    role: true,
    practice: true,
  });

  async init(
    init: EntityInitArgs<Prisma.HealthProfessionalHasStructureWhereUniqueInput>,
  ): Promise<HealthProfessionalHasStructureEntity> {
    const { where, include } = init;
    try {
      const object =
        await this.prismaService.healthProfessionalHasStructure.findUnique({
          where,
          include: this.defaultIncludes(include),
        });
      if (!object)
        throw new Error(
          `${this.entityName} with: ${JSON.stringify(where)}, not found`,
        );
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.HEALTH_PROFESSIONAL_HAS_STRUCTURE_NOT_FOUND,
      );
    }
  }

  async create(
    data: CreateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    try {
      const object =
        await this.prismaService.healthProfessionalHasStructure.create({
          data: {
            id: this.generateId(),
            healthProfessional: { connect: data.healthProfessional },
            structure: { connect: data.structure },
            role: {
              connectOrCreate: {
                where: { roleCode: data.role.roleCode },
                create: { ...data.role, id: this.generateId('rle') },
              },
            },
            practice: {
              connectOrCreate: {
                where: { practiceCode: data.practice.practiceCode },
                create: { ...data.practice, id: this.generateId('prtce') },
              },
            },
          },
          include: this.defaultIncludes(),
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_STRUCTURE_ERROR,
      );
    }
  }

  async updateOrCreate(
    where: Prisma.HealthProfessionalHasStructureHealthProfessionalIdStructureIdPracticeIdCompoundUniqueInput,
    data: CreateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    try {
      const { healthProfessional, structure, role, practice } = data;
      const object =
        await this.prismaService.healthProfessionalHasStructure.upsert({
          where: { healthProfessionalId_structureId_practiceId: where },
          create: {
            id: this.generateId(),
            healthProfessional: { connect: healthProfessional },
            structure: { connect: structure },
            role: role
              ? {
                  connectOrCreate: {
                    where: { roleCode: role.roleCode },
                    create: { ...role, id: this.generateId('rle') },
                  },
                }
              : undefined,
            practice: {
              connectOrCreate: {
                where: { practiceCode: practice.practiceCode },
                create: { ...practice, id: this.generateId('prtce') },
              },
            },
          },
          update: {
            role:
              role === undefined
                ? undefined
                : role
                ? {
                    connectOrCreate: {
                      where: { roleCode: role.roleCode },
                      create: { ...role, id: this.generateId('rle') },
                    },
                  }
                : { disconnect: true },
          },
          include: this.defaultIncludes(),
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_HEALTH_PROFESSIONAL_HAS_STRUCTURE_ERROR,
      );
    }
  }

  async update(
    where: Prisma.HealthProfessionalHasStructureWhereUniqueInput,
    data: UpdateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    try {
      const { healthProfessional, structure, practice, role } = data;
      const object =
        await this.prismaService.healthProfessionalHasStructure.update({
          where,
          data: {
            healthProfessional: healthProfessional
              ? { connect: healthProfessional }
              : undefined,
            structure: structure ? { connect: structure } : undefined,
            practice: practice
              ? {
                  connectOrCreate: {
                    where: { practiceCode: practice.practiceCode },
                    create: { ...practice, id: this.generateId('prtce') },
                  },
                }
              : undefined,
            role:
              role === undefined
                ? undefined
                : role
                ? {
                    connectOrCreate: {
                      where: { roleCode: role.roleCode },
                      create: { ...role, id: this.generateId('rle') },
                    },
                  }
                : { disconnect: true },
          },
          include: this.defaultIncludes(),
        });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_HEALTH_PROFESSIONAL_HAS_STRUCTURE_ERROR,
      );
    }
  }

  async delete(
    where: Prisma.HealthProfessionalHasStructureWhereUniqueInput,
  ): Promise<HealthProfessionalHasStructureEntity> {
    try {
      const rslt =
        await this.prismaService.healthProfessionalHasStructure.delete({
          where,
          include: this.defaultIncludes(),
        });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_HEALTH_PROFESSIONAL_HAS_STRUCTURE_ERROR,
      );
    }
  }
}

@ObjectType()
export class HealthProfessionalHasStructureArrayEntity extends AbstractArrayEntity {
  @Field(() => [HealthProfessionalHasStructureEntity])
  data: HealthProfessionalHasStructure.DTO[];

  constructor(private readonly prisma: PrismaService) {
    super();
  }

  // getWhere = (
  //   where?: HealthProfessionalHasStructureWhereInputDto,
  // ): Prisma.HealthProfessionalHasStructureWhereInput => ({
  //   ...where,
  //   id: where?.id ? { in: where.id } : undefined,
  // });

  get = async (
    where?: HealthProfessionalHasStructureWhereInputDto,
    sort?: HealthProfessionalHasStructureSortInputDto,
    pagination?: HealthProfessionalHasStructurePaginationDto,
  ): Promise<HealthProfessionalHasStructureArrayEntity> => {
    try {
      this.data = await this.prisma.healthProfessionalHasStructure.findMany({
        where, // : this.getWhere(where),
        orderBy: sort,
        skip: pagination?.skip,
        take: pagination?.take,
        cursor: pagination?.cursor,
      });
      this.count = this.data.length;
      this.total = await this.prisma.healthProfessionalHasStructure.count({
        where, // : this.getWhere(where),
      });
      return this;
    } catch (error) {
      new PrismaErrorTraductor(
        error,
        HealthProfessionalHasStructureEntity.name,
      ).throwError(ErrorEnum.FIND_HEALTH_PROFESSIONAL_HAS_STRUCTURE_ERROR);
    }
  };
}
