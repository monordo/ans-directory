import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  GQLAuthGuard,
  RequiredPermissions,
} from 'src/account/guards/auth.guard';
import { GetManyCommonPaginationDto } from 'src/common/inputs/pagination.input';
import { GeneralPermissions } from 'src/permissions/general.permission';
import { FileParser } from '../providers/file-parser.provider';
import { KnowHowLoader } from '../providers/know-how.provider';

@Resolver()
export class UpdateResolver {
  constructor(private service: KnowHowLoader) {}

  @Query(() => String)
  // @UseGuards(GQLAuthGuard)
  async test(): Promise<string> {
    await this.service.parse();
    return '';
  }
}
