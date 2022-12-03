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
  ProfessionWhereInputDto,
  UniqueProfessionInputDto,
} from './profession.input';
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';

@InputType()
export class CreateHealthProfessionalHasProfessionInputDto {
  @Field(() => UniqueProfessionInputDto)
  profession: UniqueProfessionInputDto;

  @Field(() => UniqueHealthProfessionalInputDto)
  healthProfessional: UniqueHealthProfessionalInputDto;
}

@InputType()
export class UpdateHealthProfessionalHasProfessionInputDto extends PartialType(
  CreateHealthProfessionalHasProfessionInputDto,
) {}

@InputType()
export class UniqueHealthProfessionalId_professionIdInputDto {
  @Field()
  healthProfessionalId: string;

  @Field()
  professionId: string;
}

@InputType()
export class UniqueHealthProfessionalHasProfessionInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueHealthProfessionalId_professionIdInputDto, {
    nullable: true,
  })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  UniqueprofessionTypeCode_professionCodeInputDto?: UniqueHealthProfessionalId_professionIdInputDto;
}

@InputType()
export class HealthProfessionalHasProfessionWhereInputDto extends GetManyWhereDto {
  @Field(() => [HealthProfessionalHasProfessionWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasProfessionWhereInputDto)
  OR?: HealthProfessionalHasProfessionWhereInputDto[];

  @Field(() => [HealthProfessionalHasProfessionWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasProfessionWhereInputDto)
  AND?: HealthProfessionalHasProfessionWhereInputDto[];

  @Field(() => [HealthProfessionalHasProfessionWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasProfessionWhereInputDto)
  NOT?: HealthProfessionalHasProfessionWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  healthProfessionalId?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  professionId?: GetManyStringFilterDto;

  @Field(() => ProfessionWhereInputDto, { nullable: true })
  @IsNotNull()
  profession?: ProfessionWhereInputDto;
}

@InputType()
export class HealthProfessionalHasProfessionSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  professionId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  healthProfessionalId?: FieldSortEnum;
}

@InputType()
export class HealthProfessionalHasProfessionPaginationCursorDto extends GetManyCommonPaginationCursorDto {
  // @Field(() => UniqueHealthProfessionalId_professionIdInputDto, {
  //   nullable: true,
  // })
  // @IsNotNull()
  // @IsNullIfOtherIsDefined()
  // healthProfessionalId_professionId?: UniqueHealthProfessionalId_professionIdInputDto;
}

@InputType()
export class HealthProfessionalHasProfessionPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => HealthProfessionalHasProfessionPaginationCursorDto, {
    nullable: true,
  })
  cursor?: HealthProfessionalHasProfessionPaginationCursorDto;
}

@InputType()
export class HealthProfessionalHasProfessionListRelationFilterInputDto {
  @Field(() => HealthProfessionalHasProfessionWhereInputDto, { nullable: true })
  @ValidateNested()
  every?: HealthProfessionalHasProfessionWhereInputDto;

  @Field(() => HealthProfessionalHasProfessionWhereInputDto, { nullable: true })
  @ValidateNested()
  some?: HealthProfessionalHasProfessionWhereInputDto;

  @Field(() => HealthProfessionalHasProfessionWhereInputDto, { nullable: true })
  @ValidateNested()
  none?: HealthProfessionalHasProfessionWhereInputDto;
}
