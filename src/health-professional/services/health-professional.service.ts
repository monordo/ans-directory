import { Injectable } from '@nestjs/common';
import {
  AbstractService,
  AbstractServiceWithFind,
} from 'src/common/services/service.abstract';
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
import { HealthProfessionalRepository } from '../repositories/health-professional.repository';

@Injectable()
export class HealthProfessionalService extends AbstractServiceWithFind<
  HealthProfessionalEntity,
  HealthProfessionalArrayEntity,
  UniqueHealthProfessionalInputDto,
  CreateHealthProfessionalInputDto,
  UpdateHealthProfessionalInputDto,
  HealthProfessionalWhereInputDto,
  HealthProfessionalSortInputDto,
  HealthProfessionalPaginationDto
> {
  constructor(private readonly repository: HealthProfessionalRepository) {
    super(repository);
  }

  updateOrCreate = async (data: CreateHealthProfessionalInputDto) =>
    this.repository.updateOrCreate(data);

  // find = async (
  //   where?: HealthProfessionalWhereInputDto,
  //   sort?: HealthProfessionalSortInputDto,
  //   pagination?: HealthProfessionalPaginationDto,
  // ) => this.repository.find(where, sort, pagination);
}
