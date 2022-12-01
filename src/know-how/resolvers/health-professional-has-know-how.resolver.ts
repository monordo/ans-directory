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
  // @UseGuards(GQLAuthGuard)
  async getUniqueHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalHasKnowHowArrayEntity)
  // @UseGuards(GQLAuthGuard)
  // @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
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
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createHealthProfessionalHasKnowHow(
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: CreateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.create(healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async getOrCreateHealthProfessionalHasKnowHow(
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: CreateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.getOrCreate(healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
    @Args('healthProfessionalHasKnowHow')
    healthProfessionalHasKnowHow: UpdateHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.update(where, healthProfessionalHasKnowHow);
  }

  @Mutation(() => HealthProfessionalHasKnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteHealthProfessionalHasKnowHow(
    @Args('where') where: UniqueHealthProfessionalHasKnowHowInputDto,
  ): Promise<HealthProfessionalHasKnowHowEntity> {
    return await this.service.delete(where);
  }
}
