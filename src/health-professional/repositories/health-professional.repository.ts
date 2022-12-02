import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  HealthProfessionalArrayEntity,
  HealthProfessionalEntity,
} from '../entities/health-professional.entity';
import {
  HealthProfessionalPaginationDto,
  HealthProfessionalSortInputDto,
  HealthProfessionalWhereInputDto,
} from '../inputs/filters-health-professional.input';
import {
  CreateHealthProfessionalInputDto,
  UniqueHealthProfessionalInputDto,
  UpdateHealthProfessionalInputDto,
} from '../inputs/health-professional.input';

@Injectable()
export class HealthProfessionalRepository extends AbstractRepositoryWithFind<
  HealthProfessionalEntity,
  HealthProfessionalArrayEntity,
  UniqueHealthProfessionalInputDto,
  CreateHealthProfessionalInputDto,
  UpdateHealthProfessionalInputDto,
  HealthProfessionalWhereInputDto,
  HealthProfessionalSortInputDto,
  HealthProfessionalPaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(
      HealthProfessionalEntity,
      HealthProfessionalArrayEntity,
      prismaService,
    );
  }

  updateOrCreate = async (data: CreateHealthProfessionalInputDto) => {
    return new HealthProfessionalEntity(this.prismaService).updateOrcreate(
      data,
    );
  };
}
