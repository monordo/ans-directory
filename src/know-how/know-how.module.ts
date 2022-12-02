import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { HealthProfessionalHasKnowHow } from './dtos/health-professional-has-know-how.dto';
import { HealthProfessionalHasKnowHowRepository } from './repositories/health-professional-has-know-how.repository';
import { KnowHowRepository } from './repositories/know-how.repository';
import { HealthProfessionalHasKnowHowResolver } from './resolvers/health-professional-has-know-how.resolver';
import { KnowHowResolver } from './resolvers/know-how.resolver';
import { HealthProfessionalHasKnowHowService } from './services/health-professional-has-know-how.service';
import { KnowHowService } from './services/know-how.service';

@Module({
  imports: [AccountModule, PrismaModule],
  providers: [
    KnowHowService,
    KnowHowRepository,
    KnowHowResolver,
    HealthProfessionalHasKnowHowService,
    HealthProfessionalHasKnowHowRepository,
    HealthProfessionalHasKnowHowResolver,
  ],
  exports: [
    KnowHowService,
    KnowHowRepository,
    KnowHowResolver,
    HealthProfessionalHasKnowHowService,
    HealthProfessionalHasKnowHowRepository,
    HealthProfessionalHasKnowHowResolver,
  ],
})
export class KnowHowModule {}
