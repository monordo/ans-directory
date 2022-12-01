import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { KnowHowArrayEntity, KnowHowEntity } from '../entities/know-how.entity';
import {
  CreateKnowHowInputDto,
  KnowHowSortInputDto,
  KnowHowWhereInputDto,
  UniqueKnowHowInputDto,
  UpdateKnowHowInputDto,
} from '../inputs/know-how.input';
import { KnowHowService } from '../services/know-how.service';

@Resolver(() => KnowHowEntity)
export class KnowHowResolver {
  constructor(private service: KnowHowService) {}

  @Query(() => KnowHowEntity)
  // @UseGuards(GQLAuthGuard)
  async getUniqueKnowHow(
    @Args('where') where: UniqueKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    return await this.service.unique(where);
  }

  @Query(() => KnowHowArrayEntity)
  // @UseGuards(GQLAuthGuard)
  // @RequiredPermissions(GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL)
  async getManyKnowHow(
    @Args('where', { nullable: true }) where?: KnowHowWhereInputDto,
    @Args('sort', { nullable: true }) sort?: KnowHowSortInputDto,
    @Args('pagination', { nullable: true })
    pagination?: GetManyCommonPaginationDto,
  ): Promise<KnowHowArrayEntity> {
    return await this.service.find(where, sort, pagination);
  }

  @Mutation(() => KnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async createKnowHow(
    @Args('knowHow')
    knowHow: CreateKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    return await this.service.create(knowHow);
  }

  @Mutation(() => KnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async getOrCreateKnowHow(
    @Args('knowHow')
    knowHow: CreateKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    return await this.service.getOrCreate(knowHow);
  }

  @Mutation(() => KnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async updateKnowHow(
    @Args('where') where: UniqueKnowHowInputDto,
    @Args('knowHow')
    knowHow: UpdateKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    return await this.service.update(where, knowHow);
  }

  @Mutation(() => KnowHowEntity)
  // @UseGuards(JwtAuthGuard, ContactPermissionGuard)
  async deleteKnowHow(
    @Args('where') where: UniqueKnowHowInputDto,
  ): Promise<KnowHowEntity> {
    return await this.service.delete(where);
  }
}
