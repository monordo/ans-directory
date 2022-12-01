import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  HealthProfessionalHasKnowHowArrayEntity,
  HealthProfessionalHasKnowHowEntity,
} from '../entities/health-professional-has-know-how.entity';
import {
  CreateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowPaginationDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  UniqueHealthProfessionalHasKnowHowInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
} from '../inputs/health-professional-has-know-how.input';
import { HealthProfessionalHasKnowHowRepository } from '../repositories/health-professional-has-know-how.repository';

@Injectable()
export class HealthProfessionalHasKnowHowService extends AbstractServiceWithFind<
  HealthProfessionalHasKnowHowEntity,
  HealthProfessionalHasKnowHowArrayEntity,
  UniqueHealthProfessionalHasKnowHowInputDto,
  CreateHealthProfessionalHasKnowHowInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowPaginationDto
> {
  constructor(
    private readonly repository: HealthProfessionalHasKnowHowRepository,
  ) {
    super(repository);
  }

  getOrCreate = async (data: CreateHealthProfessionalHasKnowHowInputDto) =>
    this.repository.getOrCreate(data);

  // find = async (
  //   where?: HealthProfessionalHasKnowHowWhereInputDto,
  //   sort?: HealthProfessionalHasKnowHowSortInputDto,
  //   pagination?: HealthProfessionalHasKnowHowPaginationDto,
  // ) => this.repository.find(where, sort, pagination);
}
