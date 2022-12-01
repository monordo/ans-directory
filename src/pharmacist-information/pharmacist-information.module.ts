import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { HealthProfessional } from 'src/health-professional/dtos/health-professional.dto';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HealthProfessionalHasPharmacistInformation } from './dtos/health-professional-has-pharmacist-information.dto';
import { HealthProfessionalHasPharmacistInformationRepository } from './repositories/health-professional-has-pharmacist-information.repository';
import { PharmacistInformationRepository } from './repositories/pharmacist-information.repository';
import { HealthProfessionalHasPharmacistInformationResolver } from './resolvers/health-professional-has-pharmacist-information.resolver';
import { PharmacistInformationResolver } from './resolvers/pharmacist-information.resolver';
import { HealthProfessionalHasPharmacistInformationService } from './services/health-professional-has-pharmacist-information.service';
import { PharmacistInformationService } from './services/pharmacist-information.service';

@Module({
  imports: [PrismaModule, AccountModule],
  providers: [
    PharmacistInformationRepository,
    PharmacistInformationService,
    PharmacistInformationResolver,
    HealthProfessionalHasPharmacistInformationRepository,
    HealthProfessionalHasPharmacistInformationService,
    HealthProfessionalHasPharmacistInformationResolver,
  ],
})
export class PharmacistInformationModule {}
