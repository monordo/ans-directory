import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  HealthProfessionalHasPharmacistInformationArrayEntity,
  HealthProfessionalHasPharmacistInformationEntity,
} from '../entities/health-professional-has-pharmacist-information.entity';
import {
  CreateHealthProfessionalHasPharmacistInformationInputDto,
  HealthProfessionalHasPharmacistInformationPaginationDto,
  HealthProfessionalHasPharmacistInformationSortInputDto,
  HealthProfessionalHasPharmacistInformationWhereInputDto,
  UniqueHealthProfessionalHasPharmacistInformationInputDto,
  UpdateHealthProfessionalHasPharmacistInformationInputDto,
} from '../inputs/health-professional-has-pharmacist-information.input';
import { HealthProfessionalHasPharmacistInformationService } from '../services/health-professional-has-pharmacist-information.service';

@Resolver(() => HealthProfessionalHasPharmacistInformationEntity)
export class HealthProfessionalHasPharmacistInformationResolver {
  constructor(
    private service: HealthProfessionalHasPharmacistInformationService,
  ) {}

  @Query(() => HealthProfessionalHasPharmacistInformationEntity)
  // @UseGuards(GQLAuthGuard)
  async getUniqueHealthProfessionalHasPharmacistInformation(
    @Args('where')
    where: UniqueHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    return await this.service.unique(where);
  }

  @Query(() => HealthProfessionalHasPharmacistInformationArrayEntity)
  // @UseGuards(GQLAuthGuard)
  // @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
  async getManyHealthProfessionalHasPharmacistInformation(
    @Args('where', { nullable: true })
    where?: HealthProfessionalHasPharmacistInformationWhereInputDto,
    @Args('sort', { nullable: true })
    sort?: HealthProfessionalHasPharmacistInformationSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: HealthProfessionalHasPharmacistInformationPaginationDto,
  ): Promise<HealthProfessionalHasPharmacistInformationArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => HealthProfessionalHasPharmacistInformationEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createHealthProfessionalHasPharmacistInformation(
    @Args('healthProfessionalHasPharmacistInformation')
    healthProfessionalHasPharmacistInformation: CreateHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    return await this.service.create(
      healthProfessionalHasPharmacistInformation,
    );
  }

  @Mutation(() => HealthProfessionalHasPharmacistInformationEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async getOrCreateHealthProfessionalHasPharmacistInformation(
    @Args('healthProfessionalHasPharmacistInformation')
    healthProfessionalHasPharmacistInformation: CreateHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    return await this.service.getOrCreate(
      healthProfessionalHasPharmacistInformation,
    );
  }

  @Mutation(() => HealthProfessionalHasPharmacistInformationEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateHealthProfessionalHasPharmacistInformation(
    @Args('where')
    where: UniqueHealthProfessionalHasPharmacistInformationInputDto,
    @Args('healthProfessionalHasPharmacistInformation')
    healthProfessionalHasPharmacistInformation: UpdateHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    return await this.service.update(
      where,
      healthProfessionalHasPharmacistInformation,
    );
  }

  @Mutation(() => HealthProfessionalHasPharmacistInformationEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteHealthProfessionalHasPharmacistInformation(
    @Args('where')
    where: UniqueHealthProfessionalHasPharmacistInformationInputDto,
  ): Promise<HealthProfessionalHasPharmacistInformationEntity> {
    return await this.service.delete(where);
  }
}
