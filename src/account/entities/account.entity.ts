import { Field, ObjectType } from '@nestjs/graphql';
import { Prisma, Account as PrismaObject } from '@prisma/client';

import * as _ from 'lodash';
import { EntityInitArgs } from 'src/common/dtos/entity.dto';
import { AbstractEntity } from 'src/common/entities/entity.abstract';
import { ErrorEnum } from 'src/common/errors/code.error';
import { PrismaErrorTraductor } from 'src/common/errors/prisma-traductor.error';
import { PrismaService } from 'src/prisma/prisma.service';
import { Account } from '../dtos/account.dto';
import {
  CreateAccountInputDto,
  UpdateAccountInputDto,
} from '../inputs/account.input';

@ObjectType()
export class AccountEntity extends AbstractEntity {
  @Field()
  email: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  secret: string;

  @Field()
  isActivated: boolean;

  @Field()
  permissions: string;

  constructor(prisma: PrismaService) {
    super(prisma, 'act', AccountEntity.name);
  }

  static new = (
    prismaService: PrismaService,
    init: EntityInitArgs<Prisma.AccountWhereUniqueInput>,
  ) => new AccountEntity(prismaService).init(init);

  setData(data: PrismaObject | Account.DTO): AccountEntity {
    Object.assign(this, data);
    return this;
  }

  toObject(): Account.DTO {
    return {
      ...super.toObject(),
      email: this.email,
      company: this.company,
      description: this.description,
      secret: this.secret,
      isActivated: this.isActivated,
      permissions: this.permissions,
    };
  }

  async init(
    init: EntityInitArgs<Prisma.AccountWhereUniqueInput>,
  ): Promise<AccountEntity> {
    const { where, include } = init;
    try {
      const object = await this.prismaService.account.findUnique({
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
        ErrorEnum.ACCOUNT_NOT_FOUND,
      );
    }
  }

  async create(data: CreateAccountInputDto): Promise<AccountEntity> {
    try {
      const object = await this.prismaService.account.create({
        data: {
          ...data,
          id: this.generateId(),
          secret: this.generateToken(),
        },
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.CREATE_ACCOUNT_ERROR,
      );
    }
  }

  async update(
    where: Prisma.AccountWhereUniqueInput,
    data: UpdateAccountInputDto,
  ): Promise<AccountEntity> {
    try {
      const object = await this.prismaService.account.update({
        where,
        data,
      });
      return this.setData(object);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.UPDATE_ACCOUNT_ERROR,
      );
    }
  }

  async delete(where: Prisma.AccountWhereUniqueInput): Promise<AccountEntity> {
    try {
      const rslt = await this.prismaService.account.delete({
        where,
      });
      return this.setData(rslt);
    } catch (error) {
      new PrismaErrorTraductor(error, this.entityName).throwError(
        ErrorEnum.DELETE_ACCOUNT_ERROR,
      );
    }
  }
}
