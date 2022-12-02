import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import {
  GetManyStringFilterDto,
  GetManyWhereDto,
} from 'src/common/inputs/get-many.input';
import { GetUniqueCommonWhereDto } from 'src/common/inputs/get-unique.input';
import { GetManyCommonSortDto } from 'src/common/inputs/sort.input';
import { IsNotNull } from 'src/common/object-decorators/not-null.decorator';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';
import { FieldSortEnum } from 'src/common/inputs/sort.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

@InputType()
export class CreateKnowHowInputDto {
  @Field()
  knowHowTypeCode: string;

  @Field()
  knowHowTypeLabel: string;

  @Field()
  knowHowCode: string;

  @Field()
  knowHowLabel: string;

  @Field({ nullable: true })
  healthProfessionalId?: string;
}

@InputType()
export class UpdateKnowHowInputDto extends OmitType(
  PartialType(CreateKnowHowInputDto),
  ['healthProfessionalId'],
) {}

@InputType()
export class UniqueknowHowTypeCode_knowHowCodeInputDto {
  @Field()
  knowHowTypeCode: string;

  @Field()
  knowHowCode: string;
}

@InputType()
export class UniqueKnowHowInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueknowHowTypeCode_knowHowCodeInputDto, { nullable: true })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  knowHowTypeCode_knowHowCode?: UniqueknowHowTypeCode_knowHowCodeInputDto;
}

@InputType()
export class KnowHowWhereInputDto extends GetManyWhereDto {
  @Field(() => [KnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => KnowHowWhereInputDto)
  OR?: KnowHowWhereInputDto[];

  @Field(() => [KnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => KnowHowWhereInputDto)
  AND?: KnowHowWhereInputDto[];

  @Field(() => [KnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => KnowHowWhereInputDto)
  NOT?: KnowHowWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  knowHowTypeCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  knowHowTypeLabel?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  knowHowCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  knowHowLabel?: GetManyStringFilterDto;
}

@InputType()
export class KnowHowSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  knowHowTypeCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  knowHowTypeLabel?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  knowHowCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  knowHowLabel?: FieldSortEnum;
}

// @InputType()
// export class KnowHowPaginationCursorDto extends UniqueKnowHowInputDto {}

// @InputType()
// export class KnowHowPaginationDto {
//   @Field({ nullable: true })
//   take?: number;

//   @Field({ nullable: true })
//   skip?: number;

//   @Field(() => KnowHowPaginationCursorDto, { nullable: true })
//   cursor?: KnowHowPaginationCursorDto;
// }
