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
import {
  PharmacistInformationWhereInputDto,
  UniquePharmacistInformationInputDto,
} from './pharmacist-information.input';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class CreateHealthProfessionalHasPharmacistInformationInputDto {
  @Field(() => UniquePharmacistInformationInputDto)
  pharmacistInformation: UniquePharmacistInformationInputDto;

  @Field(() => UniqueHealthProfessionalInputDto)
  healthProfessional: UniqueHealthProfessionalInputDto;
}

@InputType()
export class UpdateHealthProfessionalHasPharmacistInformationInputDto extends PartialType(
  CreateHealthProfessionalHasPharmacistInformationInputDto,
) {}

@InputType()
export class UniqueHealthProfessionalId_pharmacistInformationIdInputDto {
  @Field()
  healthProfessionalId: string;

  @Field()
  pharmacistInformationId: string;
}

@InputType()
export class UniqueHealthProfessionalHasPharmacistInformationInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueHealthProfessionalId_pharmacistInformationIdInputDto, {
    nullable: true,
  })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  UniquepharmacistInformationTypeCode_pharmacistInformationCodeInputDto?: UniqueHealthProfessionalId_pharmacistInformationIdInputDto;
}

@InputType()
export class HealthProfessionalHasPharmacistInformationWhereInputDto extends GetManyWhereDto {
  @Field(() => [HealthProfessionalHasPharmacistInformationWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasPharmacistInformationWhereInputDto)
  OR?: HealthProfessionalHasPharmacistInformationWhereInputDto[];

  @Field(() => [HealthProfessionalHasPharmacistInformationWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasPharmacistInformationWhereInputDto)
  AND?: HealthProfessionalHasPharmacistInformationWhereInputDto[];

  @Field(() => [HealthProfessionalHasPharmacistInformationWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasPharmacistInformationWhereInputDto)
  NOT?: HealthProfessionalHasPharmacistInformationWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  healthProfessionalId?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  pharmacistInformationId?: GetManyStringFilterDto;

  @Field(() => PharmacistInformationWhereInputDto, { nullable: true })
  @IsNotNull()
  pharmacistInformation?: PharmacistInformationWhereInputDto;
}

@InputType()
export class HealthProfessionalHasPharmacistInformationSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  pharmacistInformationId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  healthProfessionalId?: FieldSortEnum;
}

@InputType()
export class HealthProfessionalHasPharmacistInformationPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  // @Field()
  // healthProfessionalId: string;
  // @Field()
  // pharmacistInformationId: string;
}

@InputType()
export class HealthProfessionalHasPharmacistInformationPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => HealthProfessionalHasPharmacistInformationPaginationCursorDto, {
    nullable: true,
  })
  cursor?: HealthProfessionalHasPharmacistInformationPaginationCursorDto;
}

@InputType()
export class HealthProfessionalHasPharmacistInformationListRelationFilterInputDto {
  @Field(() => HealthProfessionalHasPharmacistInformationWhereInputDto, {
    nullable: true,
  })
  @ValidateNested()
  every?: HealthProfessionalHasPharmacistInformationWhereInputDto;

  @Field(() => HealthProfessionalHasPharmacistInformationWhereInputDto, {
    nullable: true,
  })
  @ValidateNested()
  some?: HealthProfessionalHasPharmacistInformationWhereInputDto;

  @Field(() => HealthProfessionalHasPharmacistInformationWhereInputDto, {
    nullable: true,
  })
  @ValidateNested()
  none?: HealthProfessionalHasPharmacistInformationWhereInputDto;
}
