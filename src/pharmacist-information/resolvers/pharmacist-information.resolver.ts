import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  PharmacistInformationArrayEntity,
  PharmacistInformationEntity,
} from '../entities/pharmacist-information.entity';
import {
  CreatePharmacistInformationInputDto,
  PharmacistInformationSortInputDto,
  PharmacistInformationWhereInputDto,
  UniquePharmacistInformationInputDto,
  UpdatePharmacistInformationInputDto,
} from '../inputs/pharmacist-information.input';
import { PharmacistInformationService } from '../services/pharmacist-information.service';

@Resolver(() => PharmacistInformationEntity)
export class PharmacistInformationResolver {
  constructor(private service: PharmacistInformationService) {}

  @Query(() => PharmacistInformationEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_PHARMACIST_INFORMATION)
  async getUniquePharmacistInformation(
    @Args('where') where: UniquePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    return await this.service.unique(where);
  }

  @Query(() => PharmacistInformationArrayEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.GET_MANY_PHARMACIST_INFORMATION)
  async getManyPharmacistInformation(
    @Args('where', { nullable: true })
    where?: PharmacistInformationWhereInputDto,
    @Args('sort', { nullable: true }) sort?: PharmacistInformationSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: GetManyCommonPaginationDto,
  ): Promise<PharmacistInformationArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => PharmacistInformationEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_PHARMACIST_INFORMATION)
  async createPharmacistInformation(
    @Args('pharmacistInformation')
    pharmacistInformation: CreatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    return await this.service.create(pharmacistInformation);
  }

  @Mutation(() => PharmacistInformationEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.CREATE_PHARMACIST_INFORMATION)
  async getOrCreatePharmacistInformation(
    @Args('pharmacistInformation')
    pharmacistInformation: CreatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    return await this.service.getOrCreate(pharmacistInformation);
  }

  @Mutation(() => PharmacistInformationEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.UPDATE_PHARMACIST_INFORMATION)
  async updatePharmacistInformation(
    @Args('where') where: UniquePharmacistInformationInputDto,
    @Args('pharmacistInformation')
    pharmacistInformation: UpdatePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    return await this.service.update(where, pharmacistInformation);
  }

  @Mutation(() => PharmacistInformationEntity)
  @UseGuards(GQLAuthGuard)
  @RequiredPermissions(GeneralPermissions.DELETE_PHARMACIST_INFORMATION)
  async deletePharmacistInformation(
    @Args('where') where: UniquePharmacistInformationInputDto,
  ): Promise<PharmacistInformationEntity> {
    return await this.service.delete(where);
  }
}
