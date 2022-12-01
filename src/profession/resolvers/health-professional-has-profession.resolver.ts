import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  HealthProfessionalHasProfessionArrayEntity,
  HealthProfessionalHasProfessionEntity,
} from '../entities/health-professional-has-profession.entity';
import {
  CreateHealthProfessionalHasProfessionInputDto,
  HealthProfessionalHasProfessionPaginationDto,
  HealthProfessionalHasProfessionSortInputDto,
  HealthProfessionalHasProfessionWhereInputDto,
  UniqueHealthProfessionalHasProfessionInputDto,
  UpdateHealthProfessionalHasProfessionInputDto,
} from '../inputs/health-professional-has-profession.input';
import { HealthProfessionalHasProfessionService } from '../services/health-professional-has-profession.service';

@Resolver(() => HealthProfessionalHasProfessionEntity)
export class HealthProfessionalHasProfessionResolver {
  constructor(private service: HealthProfessionalHasProfessionService) {}

  @Query(() => HealthProfessionalHasProfessionEntity)
  // @UseGuards(GQLAuthGuard)
  async getUniqueHealthProfessionalHasProfession(
    @Args('where') where: UniqueHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalHasProfessionArrayEntity)
  // @UseGuards(GQLAuthGuard)
  // @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
  async getManyHealthProfessionalHasProfession(
    @Args('where', { nullable: true })
    where?: HealthProfessionalHasProfessionWhereInputDto,
    @Args('sort', { nullable: true })
    sort?: HealthProfessionalHasProfessionSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: HealthProfessionalHasProfessionPaginationDto,
  ): Promise<HealthProfessionalHasProfessionArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => HealthProfessionalHasProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createHealthProfessionalHasProfession(
    @Args('healthProfessionalHasProfession')
    healthProfessionalHasProfession: CreateHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    return await this.service.create(healthProfessionalHasProfession);
  }

  @Mutation(() => HealthProfessionalHasProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async getOrCreateHealthProfessionalHasProfession(
    @Args('healthProfessionalHasProfession')
    healthProfessionalHasProfession: CreateHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    return await this.service.getOrCreate(healthProfessionalHasProfession);
  }

  @Mutation(() => HealthProfessionalHasProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateHealthProfessionalHasProfession(
    @Args('where') where: UniqueHealthProfessionalHasProfessionInputDto,
    @Args('healthProfessionalHasProfession')
    healthProfessionalHasProfession: UpdateHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    return await this.service.update(where, healthProfessionalHasProfession);
  }

  @Mutation(() => HealthProfessionalHasProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteHealthProfessionalHasProfession(
    @Args('where') where: UniqueHealthProfessionalHasProfessionInputDto,
  ): Promise<HealthProfessionalHasProfessionEntity> {
    return await this.service.delete(where);
  }
}
