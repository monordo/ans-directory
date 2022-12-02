import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  HealthProfessionalArrayEntity,
  HealthProfessionalEntity,
} from '../entities/health-professional.entity';
import {
  HealthProfessionalPaginationDto,
  HealthProfessionalSortInputDto,
  HealthProfessionalWhereInputDto,
} from '../inputs/filters-health-professional.input';
import {
  CreateHealthProfessionalInputDto,
  UniqueHealthProfessionalInputDto,
  UpdateHealthProfessionalInputDto,
} from '../inputs/health-professional.input';
import { HealthProfessionalService } from '../services/health-professional.service';

@Resolver(() => HealthProfessionalEntity)
export class HealthProfessionalResolver {
  constructor(private service: HealthProfessionalService) {}

  @Query(() => HealthProfessionalEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_HEALTH_PROFESSIONAL)
  async getUniqueHealthProfessional(
    @Args('where') where: UniqueHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
  async getManyHealthProfessional(
    @Args('where', { nullable: true }) where?: HealthProfessionalWhereInputDto,
    @Args('sort', { nullable: true }) sort?: HealthProfessionalSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: HealthProfessionalPaginationDto,
  ): Promise<HealthProfessionalArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => HealthProfessionalEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_HEALTH_PROFESSIONAL)
  async createHealthProfessional(
    @Args('healthProfessional')
    healthProfessional: CreateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    return await this.service.create(healthProfessional);
  }

  @Mutation(() => HealthProfessionalEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_HEALTH_PROFESSIONAL)
  async updateOrCreateHealthProfessional(
    @Args('healthProfessional')
    healthProfessional: CreateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    return await this.service.updateOrCreate(healthProfessional);
  }

  @Mutation(() => HealthProfessionalEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_HEALTH_PROFESSIONAL)
  async updateHealthProfessional(
    @Args('where') where: UniqueHealthProfessionalInputDto,
    @Args('healthProfessional')
    healthProfessional: UpdateHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    return await this.service.update(where, healthProfessional);
  }

  @Mutation(() => HealthProfessionalEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_HEALTH_PROFESSIONAL)
  async deleteHealthProfessional(
    @Args('where') where: UniqueHealthProfessionalInputDto,
  ): Promise<HealthProfessionalEntity> {
    return await this.service.delete(where);
  }
}
