import { Injectable } from '@nestjs/common';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  HealthProfessionalHasProfessionArrayEntity,
  HealthProfessionalHasProfessionEntity,
} from '../entities/health-professional-has-profession.entity';
import {
  CreateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionPaginationDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  UniqueHealthProfessionalHasProfessionInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
} from '../inputs/health-professional-has-profession.input';
import { HealthProfessionalHasProfessionRepository } from '../repositories/health-professional-has-profession.repository';

@Injectable()
export class HealthProfessionalHasProfessionService extends AbstractServiceWithFind<
  HealthProfessionalHasProfessionEntity,
  HealthProfessionalHasProfessionArrayEntity,
  UniqueHealthProfessionalHasProfessionInputDto,
  CreateHealthProfessionalHasProfessionInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionPaginationDto
> {
  constructor(
    private readonly repository: HealthProfessionalHasProfessionRepository,
  ) {
    super(repository);
  }

  getOrCreate = async (data: CreateHealthProfessionalHasProfessionInputDto) =>
    this.repository.getOrCreate(data);

  // find = async (
  //   where?: HealthProfessionalHasProfessionWhereInputDto,
  //   sort?: HealthProfessionalHasProfessionSortInputDto,
  //   pagination?: HealthProfessionalHasProfessionPaginationDto,
  // ) => this.repository.find(where, sort, pagination);
}
