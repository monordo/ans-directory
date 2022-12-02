import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from '../entities/entity.abstract';

@Injectable()
export abstract class AbstractRepository<
  Entity extends AbstractEntity,
  UniqueInput,
  CreateInput,
  UpdateInput,
> {
  constructor(
    private readonly MyEntity: { new (prisma: PrismaService): Entity },
    private readonly prisma: PrismaService,
  ) {}

  unique = async (where: UniqueInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).init({ where }) as Promise<Entity>;

  create = async (data: CreateInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).create(data) as Promise<Entity>;

  update = async (where: UniqueInput, data: UpdateInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).update(where, data) as Promise<Entity>;

  delete = async (where: UniqueInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).delete(where) as Promise<Entity>;
}

@Injectable()
export abstract class AbstractRepositoryWithFind<
  Entity extends AbstractEntity,
  ArrayEntity extends AbstractArrayEntity,
  UniqueInput,
  CreateInput,
  UpdateInput,
  GetManyWhereInput,
  GetManySortInput,
  GetManyPagination,
> {
  constructor(
    private readonly MyEntity: { new (prisma: PrismaService): Entity },
    private readonly MyArrayEntity: {
      new (prisma: PrismaService): ArrayEntity;
    },
    private readonly prisma: PrismaService,
  ) {}

  unique = async (where: UniqueInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).init({ where }) as Promise<Entity>;

  create = async (data: CreateInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).create(data) as Promise<Entity>;

  update = async (where: UniqueInput, data: UpdateInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).update(where, data) as Promise<Entity>;

  delete = async (where: UniqueInput): Promise<Entity> =>
    new this.MyEntity(this.prisma).delete(where) as Promise<Entity>;

  find = async (
    where?: GetManyWhereInput,
    sort?: GetManySortInput,
    pagination?: GetManyPagination,
  ): Promise<ArrayEntity> => {
    return new this.MyArrayEntity(this.prisma).get(
      where,
      sort,
      pagination,
    ) as Promise<ArrayEntity>;
  };
}
