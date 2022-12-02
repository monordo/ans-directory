import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { UpdateTypeEnum, UpdateTypeType } from '../inputs/update.input';
import { ActivityLoader } from '../providers/activity.provider';
import { FileParser } from '../providers/file-parser.provider';
import { KnowHowLoader } from '../providers/know-how.provider';

@Resolver()
export class UpdateResolver {
  constructor(
    private knowHowLoader: KnowHowLoader,
    private readonly activityLoader: ActivityLoader,
  ) {}

  relations = {
    [UpdateTypeEnum.KNOW_HOW]: this.knowHowLoader,
    [UpdateTypeEnum.ACTIVITY]: this.activityLoader,
  };

  @Query(() => String)
  @UseGuards(GQLAuthGuard)
  async update(
    @Args('type', { type: () => UpdateTypeEnum }) type: UpdateTypeType,
  ): Promise<string> {
    this.relations[type].parse();
    return 'ok';
  }
}
