import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/common/services/service.abstract';
import { AccountEntity } from '../entities/account.entity';
import {
  CreateAccountInputDto,
  UniqueAccountInputDto,
  UpdateAccountInputDto,
} from '../inputs/account.input';
import { AccountRepository } from '../repositories/account.repository';

@Injectable()
export class AccountService extends AbstractService<
  AccountEntity,
  UniqueAccountInputDto,
  CreateAccountInputDto,
  UpdateAccountInputDto
> {
  constructor(private readonly repository: AccountRepository) {
    super(repository);
  }
}
