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
export class StructureWhereInputDto extends GetManyWhereDto {
  @Field(() => [StructureWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => StructureWhereInputDto)
  OR?: StructureWhereInputDto[];

  @Field(() => [StructureWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => StructureWhereInputDto)
  AND?: StructureWhereInputDto[];

  @Field(() => [StructureWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => StructureWhereInputDto)
  NOT?: StructureWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  SIRET?: GetManyStringFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  SIREN?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  FINESS?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  legalFINESS?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  technicalId?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  companyName?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  comercialSign?: GetManyStringNullableFilterDto;

  @Field(() => GetManyStringNullableFilterDto, { nullable: true })
  oldIdentifiers?: GetManyStringNullableFilterDto;
}

@InputType()
export class StructureSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  SIRET?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  SIREN?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  FINESS?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  legalFINESS?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  technicalId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  companyName?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  comercialSign?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  oldIdentifiers?: FieldSortEnum;
}

@InputType()
export class StructurePaginationCursorDto extends GetManyCommonPaginationCursorDto {
  // @Field({ nullable: true })
  // @IsNullIfOtherIsDefined()
  // SIRET?: string;
}

@InputType()
export class StructurePaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => StructurePaginationCursorDto, { nullable: true })
  cursor?: StructurePaginationCursorDto;
}

@InputType()
export class StructureListRelationFilterInputDto {
  @Field(() => StructureWhereInputDto, { nullable: true })
  @ValidateNested()
  every?: StructureWhereInputDto;

  @Field(() => StructureWhereInputDto, { nullable: true })
  @ValidateNested()
  some?: StructureWhereInputDto;

  @Field(() => StructureWhereInputDto, { nullable: true })
  @ValidateNested()
  none?: StructureWhereInputDto;
}
