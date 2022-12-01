import { Injectable } from '@nestjs/common';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { HealthProfessionalEntity } from 'src/health-professional/entities/health-professional.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HealthProfessionalHasStructureArrayEntity,
  HealthProfessionalHasStructureEntity,
} from '../entities/health-professional-has-structure.entity';
import { StructureEntity } from '../entities/structure.entity';

import {
  CreateHealthProfessionalHasStructureInputDto,
  UniqueHealthProfessionalHasStructureInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructurePaginationDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructureWhereInputDto,
} from '../inputs/health-professional-has-structure.input';

@Injectable()
export class HealthProfessionalHasStructureRepository extends AbstractRepositoryWithFind<
  HealthProfessionalHasStructureEntity,
  HealthProfessionalHasStructureArrayEntity,
  UniqueHealthProfessionalHasStructureInputDto,
  CreateHealthProfessionalHasStructureInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructureWhereInputDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructurePaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      HealthProfessionalHasStructureEntity,
      HealthProfessionalHasStructureArrayEntity,
      prismaService,
    );
  }

  updateOrCreate = async (
    data: CreateHealthProfessionalHasStructureInputDto,
  ) => {
    const hp = await HealthProfessionalEntity.new(this.prismaService, {
      where: data.healthProfessional,
    });
    const structure = await StructureEntity.new(this.prismaService, {
      where: data.structure,
    });
    const practice = await this.prismaService.practice.upsert({
      where: { practiceCode: data.practice.practiceCode },
      create: { ...data.practice, id: hp.generateId('prtce', false) },
      update: {},
    });
    return new HealthProfessionalHasStructureEntity(
      this.prismaService,
    ).updateOrCreate(
      {
        healthProfessionalId: hp.id,
        structureId: structure.id,
        practiceId: practice.id,
      },
      data,
    );
  };
}
