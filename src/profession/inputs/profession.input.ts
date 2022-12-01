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
export class CreateProfessionInputDto {
  @Field()
  professionCategoryCode: string;

  @Field()
  professionCategoryLabel: string;

  @Field()
  professionCode: string;

  @Field()
  professionLabel: string;

  @Field({ nullable: true })
  healthProfessionalId: string;
}

@InputType()
export class UpdateProfessionInputDto extends OmitType(
  PartialType(CreateProfessionInputDto),
  ['healthProfessionalId'],
) {}

@InputType()
export class UniqueProfessionCategoryCode_professionCodeInputDto {
  @Field()
  professionCategoryCode: string;

  @Field()
  professionCode: string;
}

@InputType()
export class UniqueProfessionInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueProfessionCategoryCode_professionCodeInputDto, {
    nullable: true,
  })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  professionCategoryCode_professionCode?: UniqueProfessionCategoryCode_professionCodeInputDto;
}

@InputType()
export class ProfessionWhereInputDto extends GetManyWhereDto {
  @Field(() => [ProfessionWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => ProfessionWhereInputDto)
  OR?: ProfessionWhereInputDto[];

  @Field(() => [ProfessionWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => ProfessionWhereInputDto)
  AND?: ProfessionWhereInputDto[];

  @Field(() => [ProfessionWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => ProfessionWhereInputDto)
  NOT?: ProfessionWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  professionCategoryCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  professionCategoryLabel?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  professionCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  professionLabel?: GetManyStringFilterDto;
}

@InputType()
export class ProfessionSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  professionCategoryCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  professionCategoryLabel?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  professionCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  professionLabel?: FieldSortEnum;
}

// @InputType()
// export class ProfessionPaginationCursorDto extends UniqueProfessionInputDto {}

// @InputType()
// export class ProfessionPaginationDto {
//   @Field({ nullable: true })
//   take?: number;

//   @Field({ nullable: true })
//   skip?: number;

//   @Field(() => ProfessionPaginationCursorDto, { nullable: true })
//   cursor?: ProfessionPaginationCursorDto;
// }
