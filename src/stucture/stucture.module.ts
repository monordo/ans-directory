import { Module } from '@nestjs/common';
import { AccountModule } from 'src/account/account.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { HealthProfessionalHasStructureRepository } from './repositories/health-professional-has-structure.repository';
import { StructureRepository } from './repositories/structure.repository';
import { HealthProfessionalHasStructureResolver } from './resolvers/health-professional-has-structure.resolver';
import { StructureResolver } from './resolvers/structure.resolver';
import { HealthProfessionalHasStructureService } from './services/health-professional-has-structure.service';
import { StructureService } from './services/structure.service';

@Module({
  imports: [AccountModule, PrismaModule],
  providers: [
    StructureService,
    StructureRepository,
    StructureResolver,
    HealthProfessionalHasStructureRepository,
    HealthProfessionalHasStructureService,
    HealthProfessionalHasStructureResolver,
  ],
})
export class StuctureModule {}
