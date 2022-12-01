import { Injectable } from '@nestjs/common';
import {
  AbstractRepository,
  AbstractRepositoryWithFind,
} from 'src/common/repositories/repository.abstract';
import { PrismaService } from 'src/prisma/prisma.service';
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

@Injectable()
export class StructureRepository extends AbstractRepositoryWithFind<
  StructureEntity,
  StructureArrayEntity,
  UniqueStructureInputDto,
  CreateStructureInputDto,
  UpdateStructureInputDto,
  StructureWhereInputDto,
  StructureSortInputDto,
  StructurePaginationDto
> {
  constructor(private readonly prismaService: PrismaService) {
    super(StructureEntity, StructureArrayEntity, prismaService);
  }

  updateOrCreate = async (data: CreateStructureInputDto) => {
    return new StructureEntity(this.prismaService).updateOrcreate(data);
  };
}
