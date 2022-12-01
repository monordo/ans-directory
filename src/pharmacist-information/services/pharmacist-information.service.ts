import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractService,
  AbstractServiceWithFind,
} from 'src/common/services/service.abstract';
import {
  PharmacistInformationArrayEntity,
  PharmacistInformationEntity,
} from '../entities/pharmacist-information.entity';
import {
  CreatePharmacistInformationInputDto,
  PharmacistInformationPaginationDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationWhereInputDto,
  UniquePharmacistInformationInputDto,
  UpdatePharmacistInformationInputDto,
} from '../inputs/pharmacist-information.input';
import { PharmacistInformationRepository } from '../repositories/pharmacist-information.repository';

@Injectable()
export class PharmacistInformationService extends AbstractServiceWithFind<
  PharmacistInformationEntity,
  PharmacistInformationArrayEntity,
  UniquePharmacistInformationInputDto,
  CreatePharmacistInformationInputDto,
  UpdatePharmacistInformationInputDto,
  PharmacistInformationWhereInputDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationPaginationDto
> {
  constructor(private readonly repository: PharmacistInformationRepository) {
    super(repository);
  }

  getOrCreate = async (data: CreatePharmacistInformationInputDto) =>
    this.repository.getOrCreate(data);
}
