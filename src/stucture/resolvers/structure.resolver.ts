import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
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
import { StructureService } from '../services/structure.service';

@Resolver(() => StructureEntity)
export class StructureResolver {
  constructor(private service: StructureService) {}

  @Query(() => StructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_STRUCTURE)
  async getUniqueStructure(
    @Args('where') where: UniqueStructureInputDto,
  ): Promise<StructureEntity> {
    return await this.service.unique(where);
  }

  @Query(() => StructureArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_STRUCTURE)
  async getManyStructure(
    @Args('where', { nullable: true }) where?: StructureWhereInputDto,
    @Args('sort', { nullable: true }) sort?: StructureSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: StructurePaginationDto,
  ): Promise<StructureArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => StructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_STRUCTURE)
  async createStructure(
    @Args('structure')
    structure: CreateStructureInputDto,
  ): Promise<StructureEntity> {
    return await this.service.create(structure);
  }

  @Mutation(() => StructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_STRUCTURE)
  async updateOrCreateStructure(
    @Args('structure')
    structure: CreateStructureInputDto,
  ): Promise<StructureEntity> {
    return await this.service.updateOrCreate(structure);
  }

  @Mutation(() => StructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_STRUCTURE)
  async updateStructure(
    @Args('where') where: UniqueStructureInputDto,
    @Args('structure')
    structure: UpdateStructureInputDto,
  ): Promise<StructureEntity> {
    return await this.service.update(where, structure);
  }

  @Mutation(() => StructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_STRUCTURE)
  async deleteStructure(
    @Args('where') where: UniqueStructureInputDto,
  ): Promise<StructureEntity> {
    return await this.service.delete(where);
  }
}
