import { Injectable } from '@nestjs/common';
import { BitfieldProvider } from '@open-monordo/bitfield-permission-manager';
import { Prisma } from '@prisma/client';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountArrayEntity, AccountEntity } from '../entities/account.entity';
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

@Injectable()
export class AccountRepository extends AbstractRepositoryWithFind<
  AccountEntity,
  AccountArrayEntity,
  UniqueAccountInputDto,
  CreateAccountInputDto,
  UpdateAccountInputDto,
  AccountWhereInputDto,
  AccountSortInputDto,
  AccountPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(AccountEntity, AccountArrayEntity, prismaService);
  }

  count = async (where?: Prisma.AccountWhereInput): Promise<number> =>
    this.prismaService.account.count({ where });
}
