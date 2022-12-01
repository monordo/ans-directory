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
import { HealthProfessionalHasKnowHowListRelationFilterInputDto } from 'src/know-how/inputs/health-professional-has-know-how.input';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class HealthProfessionalWhereInputDto extends GetManyWhereDto {
  @Field(() => [HealthProfessionalWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalWhereInputDto)
  OR?: HealthProfessionalWhereInputDto[];

  @Field(() => [HealthProfessionalWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalWhereInputDto)
  AND?: HealthProfessionalWhereInputDto[];

  @Field(() => [HealthProfessionalWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalWhereInputDto)
  NOT?: HealthProfessionalWhereInputDto[];

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  PPIdentifierType?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  PPIdentifier?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  nationalPPIdentifier?: GetManyStringFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  practiceCivilityCode?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  practiceCivilityLabel?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  civilityCode?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  civilityLabel?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  lastname?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  firstname?: GetManyStringFilterDto;

  @Field(() => HealthProfessionalHasKnowHowListRelationFilterInputDto, {
    nullable: true,
  })
  @IsNotNull()
  knowHow?: HealthProfessionalHasKnowHowListRelationFilterInputDto;
}

@InputType()
export class HealthProfessionalSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  PPIdentifierType?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  PPIdentifier?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  nationalPPIdentifier?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  practiceCivilityCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  practiceCivilityLabel?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  civilityCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  civilityLabel?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  lastname?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  firstname?: FieldSortEnum;
}

@InputType()
export class HealthProfessionalPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  PPIdentifier?: string;

  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  nationalPPIdentifier?: string;
}

@InputType()
export class HealthProfessionalPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => HealthProfessionalPaginationCursorDto, { nullable: true })
  cursor?: HealthProfessionalPaginationCursorDto;
}

@InputType()
export class HealthProfessionalListRelationFilterInputDto {
  @Field(() => HealthProfessionalWhereInputDto, { nullable: true })
  @ValidateNested()
  every?: HealthProfessionalWhereInputDto;

  @Field(() => HealthProfessionalWhereInputDto, { nullable: true })
  @ValidateNested()
  some?: HealthProfessionalWhereInputDto;

  @Field(() => HealthProfessionalWhereInputDto, { nullable: true })
  @ValidateNested()
  none?: HealthProfessionalWhereInputDto;
}
