import { Injectable } from '@nestjs/common';
import { BitfieldProvider } from '@open-monordo/bitfield-permission-manager';
import { AbstractRepository } from 'src/common/repositories/repository.abstract';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountEntity } from '../entities/account.entity';
import {
  CreateAccountInputDto,
  UniqueAccountInputDto,
  UpdateAccountInputDto,
} from '../inputs/account.input';

@Injectable()
export class AccountRepository extends AbstractRepository<
  AccountEntity,
  UniqueAccountInputDto,
  CreateAccountInputDto,
  UpdateAccountInputDto
> {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly bitfieldService: BitfieldProvider,
  ) {
    super(AccountEntity, prismaService);
  }

  create = async (data: CreateAccountInputDto): Promise<AccountEntity> => {
    console.log(
      this.bitfieldService
        .compute([GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL.value])
        .toString(),
    );
    return new AccountEntity(this.prismaService).create({
      ...data,
      permissions: this.bitfieldService
        .compute([GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL.value])
        .toString(),
    });
  };
}
