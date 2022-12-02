import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  HealthProfessionalHasStructureArrayEntity,
  HealthProfessionalHasStructureEntity,
} from '../entities/health-professional-has-structure.entity';
import {
  CreateHealthProfessionalHasStructureInputDto,
  UniqueHealthProfessionalHasStructureInputDto,
  UpdateHealthProfessionalHasStructureInputDto,
  HealthProfessionalHasStructurePaginationDto,
  HealthProfessionalHasStructureSortInputDto,
  HealthProfessionalHasStructureWhereInputDto,
} from '../inputs/health-professional-has-structure.input';
import { HealthProfessionalHasStructureService } from '../services/health-professional-has-structure.service';

@Resolver(() => HealthProfessionalHasStructureEntity)
export class HealthProfessionalHasStructureResolver {
  constructor(private service: HealthProfessionalHasStructureService) {}

  @Query(() => HealthProfessionalHasStructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_HP_HAS_STRUCTURE)
  async getUniqueHealthProfessionalHasStructure(
    @Args('where') where: UniqueHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalHasStructureArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_HP_HAS_STRUCTURE)
  async getManyHealthProfessionalHasStructure(
    @Args('where', { nullable: true })
    where?: HealthProfessionalHasStructureWhereInputDto,
    @Args('sort', { nullable: true })
    sort?: HealthProfessionalHasStructureSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: HealthProfessionalHasStructurePaginationDto,
  ): Promise<HealthProfessionalHasStructureArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => HealthProfessionalHasStructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_HP_HAS_STRUCTURE)
  async createHealthProfessionalHasStructure(
    @Args('healthProfessionalHasStructure')
    healthProfessionalHasStructure: CreateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    return await this.service.create(healthProfessionalHasStructure);
  }

  @Mutation(() => HealthProfessionalHasStructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_HP_HAS_STRUCTURE)
  async updateOrCreateHealthProfessionalHasStructure(
    @Args('healthProfessionalHasStructure')
    healthProfessionalHasStructure: CreateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    return await this.service.updateOrCreate(healthProfessionalHasStructure);
  }

  @Mutation(() => HealthProfessionalHasStructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_HP_HAS_STRUCTURE)
  async updateHealthProfessionalHasStructure(
    @Args('where') where: UniqueHealthProfessionalHasStructureInputDto,
    @Args('healthProfessionalHasStructure')
    healthProfessionalHasStructure: UpdateHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    return await this.service.update(where, healthProfessionalHasStructure);
  }

  @Mutation(() => HealthProfessionalHasStructureEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_HP_HAS_STRUCTURE)
  async deleteHealthProfessionalHasStructure(
    @Args('where') where: UniqueHealthProfessionalHasStructureInputDto,
  ): Promise<HealthProfessionalHasStructureEntity> {
    return await this.service.delete(where);
  }
}
