import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { AccountArrayEntity, AccountEntity } from '../entities/account.entity';
import {
  AcceptIfServerNotSetup,
  GQLAuthGuard,
  RequiredPermissions,
} from '../guards/auth.guard';
import {
  CreateAccountInputDto,
  UniqueAccountInputDto,
  UpdateAccountInputDto,
} from '../inputs/account.input';
import {
  AccountPaginationDto,
  AccountSortInputDto,
  AccountWhereInputDto,
} from '../inputs/filters-account.input';
import { AccountService } from '../services/account.service';

@Resolver(() => AccountEntity)
export class AccountResolver {
  constructor(private service: AccountService) {}

  @Query(() => AccountEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_ACCOUNT)
  async getUniqueAccount(
    @Args('where') where: UniqueAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.unique(where);
  }

  @Query(() => AccountArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_ACCOUNT)
  async getManyAccount(
    @Args('where', { nullable: true }) where?: AccountWhereInputDto,
    @Args('sort', { nullable: true }) sort?: AccountSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: AccountPaginationDto,
  ): Promise<AccountArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => AccountEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_ACCOUNT)
  @AcceptIfServerNotSetup(true)
  async createAccount(
    @Args('account') account: CreateAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.create(account);
  }

  @Mutation(() => AccountEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_ACCOUNT)
  async updateAccount(
    @Args('where') where: UniqueAccountInputDto,
    @Args('account') account: UpdateAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.update(where, account);
  }

  @Mutation(() => AccountEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_ACCOUNT)
  async deleteAccount(
    @Args('where') where: UniqueAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.delete(where);
  }
}
