import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import {
  GetManyStringFilterDto,
  GetManyStringNullableFilterDto,
  GetManyWhereDto,
} from 'src/common/inputs/get-many.input';
import { GetUniqueCommonWhereDto } from 'src/common/inputs/get-unique.input';
import { GetManyCommonSortDto } from 'src/common/inputs/sort.input';
import { IsNotNull } from 'src/common/object-decorators/not-null.decorator';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';
import { FieldSortEnum } from 'src/common/inputs/sort.input';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UniqueHealthProfessionalInputDto } from 'src/health-professional/inputs/health-professional.input';
import { KnowHowWhereInputDto, UniqueKnowHowInputDto } from './know-how.input';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class CreateHealthProfessionalHasKnowHowInputDto {
  @Field(() => UniqueKnowHowInputDto)
  knowHow: UniqueKnowHowInputDto;

  @Field(() => UniqueHealthProfessionalInputDto)
  healthProfessional: UniqueHealthProfessionalInputDto;
}

@InputType()
export class UpdateHealthProfessionalHasKnowHowInputDto extends PartialType(
  CreateHealthProfessionalHasKnowHowInputDto,
) {}

@InputType()
export class UniqueHealthProfessionalId_knowHowIdInputDto {
  @Field()
  healthProfessionalId: string;

  @Field()
  knowHowId: string;
}

@InputType()
export class UniqueHealthProfessionalHasKnowHowInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueHealthProfessionalId_knowHowIdInputDto, { nullable: true })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  UniqueknowHowTypeCode_knowHowCodeInputDto?: UniqueHealthProfessionalId_knowHowIdInputDto;
}

@InputType()
export class HealthProfessionalHasKnowHowWhereInputDto extends GetManyWhereDto {
  @Field(() => [HealthProfessionalHasKnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalHasKnowHowWhereInputDto)
  OR?: HealthProfessionalHasKnowHowWhereInputDto[];

  @Field(() => [HealthProfessionalHasKnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalHasKnowHowWhereInputDto)
  AND?: HealthProfessionalHasKnowHowWhereInputDto[];

  @Field(() => [HealthProfessionalHasKnowHowWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => HealthProfessionalHasKnowHowWhereInputDto)
  NOT?: HealthProfessionalHasKnowHowWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  healthProfessionalId?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  knowHowId?: GetManyStringFilterDto;

  @Field(() => KnowHowWhereInputDto, { nullable: true })
  @IsNotNull()
  knowHow?: KnowHowWhereInputDto;
}

@InputType()
export class HealthProfessionalHasKnowHowSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  knowHowId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  healthProfessionalId?: FieldSortEnum;
}

@InputType()
export class HealthProfessionalHasKnowHowPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  // @Field()
  // healthProfessionalId: string;
  // @Field()
  // knowHowId: string;
}

@InputType()
export class HealthProfessionalHasKnowHowPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => HealthProfessionalHasKnowHowPaginationCursorDto, {
    nullable: true,
  })
  cursor?: HealthProfessionalHasKnowHowPaginationCursorDto;
}

@InputType()
export class HealthProfessionalHasKnowHowListRelationFilterInputDto {
  @Field(() => HealthProfessionalHasKnowHowWhereInputDto, { nullable: true })
  @ValidateNested()
  every?: HealthProfessionalHasKnowHowWhereInputDto;

  @Field(() => HealthProfessionalHasKnowHowWhereInputDto, { nullable: true })
  @ValidateNested()
  some?: HealthProfessionalHasKnowHowWhereInputDto;

  @Field(() => HealthProfessionalHasKnowHowWhereInputDto, { nullable: true })
  @ValidateNested()
  none?: HealthProfessionalHasKnowHowWhereInputDto;
}
