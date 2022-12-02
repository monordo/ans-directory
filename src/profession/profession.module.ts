import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HealthProfessionalHasProfessionRepository } from './repositories/health-professional-has-profession.repository';
import { ProfessionRepository } from './repositories/profession.repository';
import { HealthProfessionalHasProfessionResolver } from './resolvers/health-professional-has-profession.resolver';
import { ProfessionResolver } from './resolvers/profession.resolver';
import { HealthProfessionalHasProfessionService } from './services/health-professional-has-profession.service';
import { ProfessionService } from './services/profession.service';

@Module({
  imports: [AccountModule, PrismaModule],
  providers: [
    ProfessionService,
    ProfessionRepository,
    ProfessionResolver,
    HealthProfessionalHasProfessionService,
    HealthProfessionalHasProfessionRepository,
    HealthProfessionalHasProfessionResolver,
  ],
  exports: [
    ProfessionService,
    ProfessionRepository,
    ProfessionResolver,
    HealthProfessionalHasProfessionService,
    HealthProfessionalHasProfessionRepository,
    HealthProfessionalHasProfessionResolver,
  ],
})
export class ProfessionModule {}
