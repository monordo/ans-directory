import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  HealthProfessionalHasKnowHowArrayEntity,
  HealthProfessionalHasKnowHowEntity,
} from '../entities/health-professional-has-know-how.entity';
import {
  CreateHealthProfessionalHasKnowHowInputDto,
  HealthProfessionalHasKnowHowPaginationDto,
  HealthProfessionalHasKnowHowSortInputDto,
  HealthProfessionalHasKnowHowWhereInputDto,
  UniqueHealthProfessionalHasKnowHowInputDto,
  UpdateHealthProfessionalHasKnowHowInputDto,
} from '../inputs/health-professional-has-know-how.input';
import { HealthProfessionalHasKnowHowService } from '../services/health-professional-has-know-how.service';

@Resolver(() => HealthProfessionalHasKnowHowEntity)
export class HealthProfessionalHasKnowHowResolver {
  constructor(private service: HealthProfessionalHasKnowHowService) {}

  @Query(() => HealthProfessionalHasKnowHowEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_HP_HAS_KNOW_HOW)
  async getUniqueHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalHasKnowHowArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_HP_HAS_KNOW_HOW)
  async getManyHealthProfessionalHasKnowHow(
    @Args('where', { nullable: true })
    where?: HealthProfessionalHasKnowHowWhereInputDto,
    @Args('sort', { nullable: true })
    sort?: HealthProfessionalHasKnowHowSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: HealthProfessionalHasKnowHowPaginationDto,
  ): Promise<HealthProfessionalHasKnowHowArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_HP_HAS_KNOW_HOW)
  async createHealthProfessionalHasKnowHow(
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: CreateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.create(healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_HP_HAS_KNOW_HOW)
  async getOrCreateHealthProfessionalHasKnowHow(
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: CreateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.getOrCreate(healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_HP_HAS_KNOW_HOW)
  async updateHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: UpdateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.update(where, healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_HP_HAS_KNOW_HOW)
  async deleteHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.delete(where);
  }
}
