import { Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AccountModule } from 'src/account/account.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HealthProfessionalRepository } from './repositories/health-professional.repository';
import { HealthProfessionalResolver } from './resolvers/health-professional.resolver';
import { HealthProfessionalService } from './services/health-professional.service';

@Module({
  imports: [PrismaModule, AccountModule],
  providers: [
    HealthProfessionalRepository,
    HealthProfessionalService,
    HealthProfessionalResolver,
  ],
  exports: [
    HealthProfessionalRepository,
    HealthProfessionalService,
    HealthProfessionalResolver,
  ],
})
export class HealthProfessionalModule {}
