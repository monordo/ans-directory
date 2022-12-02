import { Field, InputType } from '@nestjs/graphql';
import {
  GetManyStringFilterDto,
  GetManyStringNullableFilterDto,
  GetManyWhereDto,
} from 'src/common/inputs/get-many.input';
import { GetManyCommonSortDto } from 'src/common/inputs/sort.input';
import { IsNotNull } from 'src/common/object-decorators/not-null.decorator';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';
import { FieldSortEnum } from 'src/common/inputs/sort.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class AccountWhereInputDto extends GetManyWhereDto {
  @Field(() => [AccountWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => AccountWhereInputDto)
  OR?: AccountWhereInputDto[];

  @Field(() => [AccountWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => AccountWhereInputDto)
  AND?: AccountWhereInputDto[];

  @Field(() => [AccountWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => AccountWhereInputDto)
  NOT?: AccountWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  secret?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  email?: GetManyStringFilterDto;
}

@InputType()
export class AccountSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  secret?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  email?: FieldSortEnum;
}

@InputType()
export class AccountPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  secret?: string;

  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  email?: string;
}

@InputType()
export class AccountPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => AccountPaginationCursorDto, { nullable: true })
  cursor?: AccountPaginationCursorDto;
}
