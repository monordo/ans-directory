import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountEntity } from '../entities/account.entity';
import { GQLAuthGuard } from '../guards/auth.guard';
import {
  CreateAccountInputDto,
  UniqueAccountInputDto,
  UpdateAccountInputDto,
} from '../inputs/account.input';
import { AccountService } from '../services/account.service';

@Resolver(() => AccountEntity)
// @UseGuards(JwtAuthGuard, PermissionGuard)
export class AccountResolver {
  constructor(private service: AccountService) {}

  @Query(() => AccountEntity)
  @UseGuards(GQLAuthGuard)
  async getUniqueAccount(
    @Args('where') where: UniqueAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.unique(where);
  }

  @Mutation(() => AccountEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createAccount(
    @Args('account') account: CreateAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.create(account);
  }

  @Mutation(() => AccountEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateAccount(
    @Args('where') where: UniqueAccountInputDto,
    @Args('account') account: UpdateAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.update(where, account);
  }

  @Mutation(() => AccountEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteAccount(
    @Args('where') where: UniqueAccountInputDto,
  ): Promise<AccountEntity> {
    return await this.service.delete(where);
  }
}
