import { Module } from '@nestjs/common';
import { BitfieldProvider } from '@open-monordo/bitfield-permission-manager';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AccountRepository } from './repositories/account.repository';
import { AccountResolver } from './resolvers/account.resolver';
import { AccountService } from './services/account.service';

@Module({
  imports: [PrismaModule],
  providers: [
    AccountRepository,
    AccountService,
    AccountResolver,
    BitfieldProvider,
  ],
  exports: [AccountService],
})
export class AccountModule {}
