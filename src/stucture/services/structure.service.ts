import { Injectable } from '@nestjs/common';
import { AbstractServiceWithFind } from 'src/common/services/service.abstract';
import {
  StructureArrayEntity,
  StructureEntity,
} from '../entities/structure.entity';
import {
  StructurePaginationDto,
  StructureSortInputDto,
  StructureWhereInputDto,
} from '../inputs/filters-structure.input';
import {
  CreateStructureInputDto,
  UniqueStructureInputDto,
  UpdateStructureInputDto,
} from '../inputs/structure.input';
import { StructureRepository } from '../repositories/structure.repository';

@Injectable()
export class StructureService extends AbstractServiceWithFind<
  StructureEntity,
  StructureArrayEntity,
  UniqueStructureInputDto,
  CreateStructureInputDto,
  UpdateStructureInputDto,
  StructureWhereInputDto,
  StructureSortInputDto,
  StructurePaginationDto
> {
  constructor(private readonly repository: StructureRepository) {
    super(repository);
  }

  updateOrCreate = async (data: CreateStructureInputDto) =>
    this.repository.updateOrCreate(data);

  // find = async (
  //   where?: StructureWhereInputDto,
  //   sort?: StructureSortInputDto,
  //   pagination?: StructurePaginationDto,
  // ) => this.repository.find(where, sort, pagination);
}
