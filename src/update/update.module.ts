import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { HealthProfessional } from 'src/health-professional/dtos/health-professional.dto';
import { HealthProfessionalModule } from 'src/health-professional/health-professional.module';
import { KnowHowModule } from 'src/know-how/know-how.module';
import { KnowHowRepository } from 'src/know-how/repositories/know-how.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfessionModule } from 'src/profession/profession.module';
import { ActivityLoader } from './providers/activity.provider';
import { FileLoader } from './providers/file-loader.provider';
import { FileParser } from './providers/file-parser.provider';
import { KnowHowLoader } from './providers/know-how.provider';
import { UpdateResolver } from './resolvers/profession.resolver';

@Module({
  imports: [
    PrismaModule,
    KnowHowModule,
    HealthProfessionalModule,
    ProfessionModule,
    AccountModule,
  ],
  providers: [
    FileParser,
    UpdateResolver,
    FileLoader,
    KnowHowLoader,
    ActivityLoader,
  ],
  exports: [FileParser],
})
export class UpdateModule {}
