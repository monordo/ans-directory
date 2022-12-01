import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  ProfessionArrayEntity,
  ProfessionEntity,
} from '../entities/profession.entity';
import {
  CreateProfessionInputDto,
  ProfessionSortInputDto,
  ProfessionWhereInputDto,
  UniqueProfessionInputDto,
  UpdateProfessionInputDto,
} from '../inputs/profession.input';
import { ProfessionRepository } from '../repositories/profession.repository';

@Injectable()
export class ProfessionService extends AbstractServiceWithFind<
  ProfessionEntity,
  ProfessionArrayEntity,
  UniqueProfessionInputDto,
  CreateProfessionInputDto,
  UpdateProfessionInputDto,
  ProfessionWhereInputDto,
  ProfessionSortInputDto,
  GetManyCommonPaginationDto
> {
  constructor(private readonly repository: ProfessionRepository) {
    super(repository);
  }

  getOrCreate = async (data: CreateProfessionInputDto) =>
    this.repository.getOrCreate(data);
}
