import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { GeneralPermissions } from 'src/permissions/general.permission';
import {
  ProfessionArrayEntity,
  ProfessionEntity,
} from '../entities/profession.entity';
import {
  CreateProfessionInputDto,
  ProfessionSortInputDto,
  ProfessionWhereInputDto,
  UniqueProfessionInputDto,
  UpdateProfessionInputDto,
} from '../inputs/profession.input';
import { ProfessionService } from '../services/profession.service';

@Resolver(() => ProfessionEntity)
export class ProfessionResolver {
  constructor(private service: ProfessionService) {}

  @Query(() => ProfessionEntity)
  // @UseGuards(GQLAuthGuard)
  async getUniqueProfession(
    @Args('where') where: UniqueProfessionInputDto,
  ): Promise<ProfessionEntity> {
    return await this.service.unique(where);
  }

  @Query(() => ProfessionArrayEntity)
  // @UseGuards(GQLAuthGuard)
  // @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
  async getManyProfession(
    @Args('where', { nullable: true }) where?: ProfessionWhereInputDto,
    @Args('sort', { nullable: true }) sort?: ProfessionSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: GetManyCommonPaginationDto,
  ): Promise<ProfessionArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => ProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createProfession(
    @Args('profession')
    profession: CreateProfessionInputDto,
  ): Promise<ProfessionEntity> {
    return await this.service.create(profession);
  }

  @Mutation(() => ProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async getOrCreateProfession(
    @Args('profession')
    profession: CreateProfessionInputDto,
  ): Promise<ProfessionEntity> {
    return await this.service.getOrCreate(profession);
  }

  @Mutation(() => ProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateProfession(
    @Args('where') where: UniqueProfessionInputDto,
    @Args('profession')
    profession: UpdateProfessionInputDto,
  ): Promise<ProfessionEntity> {
    return await this.service.update(where, profession);
  }

  @Mutation(() => ProfessionEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteProfession(
    @Args('where') where: UniqueProfessionInputDto,
  ): Promise<ProfessionEntity> {
    return await this.service.delete(where);
  }
}
