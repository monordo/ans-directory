import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  HealthProfessionalHasPharmacistInformationArrayEntity,
  HealthProfessionalHasPharmacistInformationEntity,
} from '../entities/health-professional-has-pharmacist-information.entity';
import {
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  UniqueHealthProfessionalHasPharmacistInformationInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
} from '../inputs/health-professional-has-pharmacist-information.input';
import { HealthProfessionalHasPharmacistInformationRepository } from '../repositories/health-professional-has-pharmacist-information.repository';

@Injectable()
export class HealthProfessionalHasPharmacistInformationService extends AbstractServiceWithFind<
  HealthProfessionalHasPharmacistInformationEntity,
  HealthProfessionalHasPharmacistInformationArrayEntity,
  UniqueHealthProfessionalHasPharmacistInformationInputDto,
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto
> {
  constructor(
    private readonly repository: HealthProfessionalHasPharmacistInformationRepository,
  ) {
    super(repository);
  }

  getOrCreate = async (
    data: CreateHealthProfessionalHasPharmacistInformationInputDto,
  ) => this.repository.getOrCreate(data);
}
