import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AbstractArrayEntity,
  AbstractEntity,
} from '../entities/entity.abstract';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from '../repositories/repository.abstract';

@Injectable()
export abstract class AbstractService<
  Entity extends AbstractEntity,
  UniqueInput,
  CreateInput,
  UpdateInput,
  Repository extends AbstractRepository<
    Entity,
    UniqueInput,
    CreateInput,
    UpdateInput
  >,
> {
  constructor(protected readonly repo: Repository) {}

  unique = async (where: UniqueInput): Promise<Entity> =>
    this.repo.unique(where);

  create = async (where: CreateInput): Promise<Entity> =>
    this.repo.create(where);

  update = async (where: UniqueInput, data: UpdateInput): Promise<Entity> =>
    this.repo.update(where, data);

  delete = async (where: UniqueInput): Promise<Entity> =>
    this.repo.delete(where);
}

@Injectable()
export abstract class AbstractServiceWithFind<
  Entity extends AbstractEntity,
  ArrayEntity extends AbstractArrayEntity,
  UniqueInput,
  CreateInput,
  UpdateInput,
  GetManyWhereInput,
  GetManySortInput,
  GetManyPagination,
> extends AbstractService<
  Entity,
  UniqueInput,
  CreateInput,
  UpdateInput,
  AbstractRepositoryWithFind<
    Entity,
    ArrayEntity,
    UniqueInput,
    CreateInput,
    UpdateInput,
    GetManyWhereInput,
    GetManySortInput,
    GetManyPagination
  >
> {
  constructor(
    repo: AbstractRepositoryWithFind<
      Entity,
      ArrayEntity,
      UniqueInput,
      CreateInput,
      UpdateInput,
      GetManyWhereInput,
      GetManySortInput,
      GetManyPagination
    >,
  ) {
    super(repo);
  }

  unique = async (where: UniqueInput): Promise<Entity> =>
    this.repo.unique(where);

  create = async (where: CreateInput): Promise<Entity> =>
    this.repo.create(where);

  update = async (where: UniqueInput, data: UpdateInput): Promise<Entity> =>
    this.repo.update(where, data);

  delete = async (where: UniqueInput): Promise<Entity> =>
    this.repo.delete(where);

  find = async (
    where?: GetManyWhereInput,
    sort?: GetManySortInput,
    pagination?: GetManyPagination,
  ): Promise<ArrayEntity> => this.repo.find(where, sort, pagination);
}
