import { Injectable } from '@nestjs/common';
import {
  AbstractService,
  AbstractServiceWithFind,
} from 'src/common/services/service.abstract';
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
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class AccountService extends AbstractServiceWithFind<
  AccountEntity,
  AccountArrayEntity,
  UniqueAccountInputDto,
  CreateAccountInputDto,
  UpdateAccountInputDto,
  AccountWhereInputDto,
  AccountSortInputDto,
  AccountPaginationDto
> {
  constructor(private readonly repository: AccountRepository) {
    super(repository);
  }

  async count(): Promise<number> {
    return this.repository.count();
  }
}
