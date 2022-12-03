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
import { Prisma } from '@prisma/client';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class CreatePharmacistInformationInputDto {
  @Field()
  sectionCode: string;

  @Field()
  sectionLabel: string;

  @Field({ nullable: true })
  healthProfessionalId?: string;
}

@InputType()
export class UpdatePharmacistInformationInputDto extends OmitType(
  PartialType(CreatePharmacistInformationInputDto),
  ['healthProfessionalId'],
) {}

@InputType()
export class UniqueknowHowTypeCode_knowHowCodeInputDto {
  @Field()
  sectionCode: string;

  @Field()
  sectionLabel: string;
}

@InputType()
export class UniquePharmacistInformationInputDto extends GetUniqueCommonWhereDto {
  @Field({ nullable: true })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  sectionCode?: string;
}

@InputType()
export class PharmacistInformationWhereInputDto extends GetManyWhereDto {
  @Field(() => [PharmacistInformationWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => PharmacistInformationWhereInputDto)
  OR?: PharmacistInformationWhereInputDto[];

  @Field(() => [PharmacistInformationWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => PharmacistInformationWhereInputDto)
  AND?: PharmacistInformationWhereInputDto[];

  @Field(() => [PharmacistInformationWhereInputDto], { nullable: true })
  @ValidateNested()
  @Type(() => PharmacistInformationWhereInputDto)
  NOT?: PharmacistInformationWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  sectionCode?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  sectionLabel?: GetManyStringFilterDto;
}

@InputType()
export class PharmacistInformationSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  sectionCode?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  sectionLabel?: FieldSortEnum;
}

@InputType()
export class PharmacistInformationPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  // @Field({ nullable: true })
  // @IsNotNull()
  // @IsNullIfOtherIsDefined()
  // sectionCode?: string;
}

@InputType()
export class PharmacistInformationPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => PharmacistInformationPaginationCursorDto, { nullable: true })
  cursor?: PharmacistInformationPaginationCursorDto;
}
