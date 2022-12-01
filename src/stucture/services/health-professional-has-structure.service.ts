import { Injectable } from '@nestjs/common';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  HealthProfessionalHasStructureArrayEntity,
  HealthProfessionalHasStructureEntity,
} from '../entities/health-professional-has-structure.entity';
import {
  CreateHealthProfessionalHasStructureInputDto,
  UniqueHealthProfessionalHasStructureInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructurePaginationDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructureWhereInputDto,
} from '../inputs/health-professional-has-structure.input';
import { HealthProfessionalHasStructureRepository } from '../repositories/health-professional-has-structure.repository';

@Injectable()
export class HealthProfessionalHasStructureService extends AbstractServiceWithFind<
  HealthProfessionalHasStructureEntity,
  HealthProfessionalHasStructureArrayEntity,
  UniqueHealthProfessionalHasStructureInputDto,
  CreateHealthProfessionalHasStructureInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructureWhereInputDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructurePaginationDto
> {
  constructor(
    private readonly repository: HealthProfessionalHasStructureRepository,
  ) {
    super(repository);
  }

  updateOrCreate = async (data: CreateHealthProfessionalHasStructureInputDto) =>
    this.repository.updateOrCreate(data);

  // find = async (
  //   where?: HealthProfessionalHasStructureWhereInputDto,
  //   sort?: HealthProfessionalHasStructureSortInputDto,
  //   pagination?: HealthProfessionalHasStructurePaginationDto,
  // ) => this.repository.find(where, sort, pagination);
}
