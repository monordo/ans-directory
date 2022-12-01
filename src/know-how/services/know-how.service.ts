import { Injectable } from '@nestjs/common';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import {
  AbstractService,
  AbstractServiceWithFind,
} from 'src/common/services/service.abstract';
import { KnowHowArrayEntity, KnowHowEntity } from '../entities/know-how.entity';
import {
  CreateKnowHowInputDto,
  KnowHowSortInputDto,
  KnowHowWhereInputDto,
  UniqueKnowHowInputDto,
  UpdateKnowHowInputDto,
} from '../inputs/know-how.input';
import { KnowHowRepository } from '../repositories/know-how.repository';

@Injectable()
export class KnowHowService extends AbstractServiceWithFind<
  KnowHowEntity,
  KnowHowArrayEntity,
  UniqueKnowHowInputDto,
  CreateKnowHowInputDto,
  UpdateKnowHowInputDto,
  KnowHowWhereInputDto,
  KnowHowSortInputDto,
  GetManyCommonPaginationDto
> {
  constructor(private readonly repository: KnowHowRepository) {
    super(repository);
  }

  getOrCreate = async (data: CreateKnowHowInputDto) =>
    this.repository.getOrCreate(data);
}
