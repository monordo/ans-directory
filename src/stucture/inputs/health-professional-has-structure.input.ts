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
import { GetManyCommonPaginationCursorDto } from 'src/common/inputs/pagination.input';
import { UniqueStructureInputDto } from './structure.input';
import { CreateRoleInputDto, RoleWhereInputDto } from './role.input';
import {
  CreatePracticeInputDto,
  PracticeWhereInputDto,
} from './practice.input';
import { StructureWhereInputDto } from './filters-structure.input';

@InputType()
export class CreateHealthProfessionalHasStructureInputDto {
  @Field(() => UniqueStructureInputDto)
  structure: UniqueStructureInputDto;

  @Field(() => UniqueHealthProfessionalInputDto)
  healthProfessional: UniqueHealthProfessionalInputDto;

  @Field(() => CreateRoleInputDto, { nullable: true })
  role?: CreateRoleInputDto;

  @Field(() => CreatePracticeInputDto)
  practice: CreatePracticeInputDto;
}

@InputType()
export class UpdateHealthProfessionalHasStructureInputDto extends PartialType(
  CreateHealthProfessionalHasStructureInputDto,
) {}

@InputType()
export class UniqueHealthProfessionalId_structureId_practiceIdInputDto {
  @Field()
  healthProfessionalId: string;

  @Field()
  structureId: string;

  @Field()
  practiceId: string;
}

@InputType()
export class UniqueHealthProfessionalHasStructureInputDto extends GetUniqueCommonWhereDto {
  @Field(() => UniqueHealthProfessionalId_structureId_practiceIdInputDto, {
    nullable: true,
  })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  healthProfessionalId_structureId_practiceId?: UniqueHealthProfessionalId_structureId_practiceIdInputDto;
}

@InputType()
export class HealthProfessionalHasStructureWhereInputDto extends GetManyWhereDto {
  @Field(() => [HealthProfessionalHasStructureWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasStructureWhereInputDto)
  OR?: HealthProfessionalHasStructureWhereInputDto[];

  @Field(() => [HealthProfessionalHasStructureWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasStructureWhereInputDto)
  AND?: HealthProfessionalHasStructureWhereInputDto[];

  @Field(() => [HealthProfessionalHasStructureWhereInputDto], {
    nullable: true,
  })
  @ValidateNested()
  @Type(() => HealthProfessionalHasStructureWhereInputDto)
  NOT?: HealthProfessionalHasStructureWhereInputDto[];

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  healthProfessionalId?: GetManyStringFilterDto;

  @Field(() => GetManyStringFilterDto, { nullable: true })
  @IsNotNull()
  structureId?: GetManyStringFilterDto;

  @Field(() => StructureWhereInputDto, { nullable: true })
  @IsNotNull()
  structure?: StructureWhereInputDto;

  @Field(() => PracticeWhereInputDto, { nullable: true })
  @IsNotNull()
  practice?: PracticeWhereInputDto;

  @Field(() => RoleWhereInputDto, { nullable: true })
  role?: RoleWhereInputDto;
}

@InputType()
export class HealthProfessionalHasStructureSortInputDto extends GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  structureId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  healthProfessionalId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  roleId?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  practiceId?: FieldSortEnum;
}

@InputType()
export class HealthProfessionalHasStructurePaginationCursorDto extends GetManyCommonPaginationCursorDto {
  @Field(() => UniqueHealthProfessionalId_structureId_practiceIdInputDto, {
    nullable: true,
  })
  @IsNotNull()
  @IsNullIfOtherIsDefined()
  healthProfessionalId_structureId_practiceId?: UniqueHealthProfessionalId_structureId_practiceIdInputDto;
}

@InputType()
export class HealthProfessionalHasStructurePaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => HealthProfessionalHasStructurePaginationCursorDto, {
    nullable: true,
  })
  cursor?: HealthProfessionalHasStructurePaginationCursorDto;
}

@InputType()
export class HealthProfessionalHasStructureListRelationFilterInputDto {
  @Field(() => HealthProfessionalHasStructureWhereInputDto, { nullable: true })
  @ValidateNested()
  every?: HealthProfessionalHasStructureWhereInputDto;

  @Field(() => HealthProfessionalHasStructureWhereInputDto, { nullable: true })
  @ValidateNested()
  some?: HealthProfessionalHasStructureWhereInputDto;

  @Field(() => HealthProfessionalHasStructureWhereInputDto, { nullable: true })
  @ValidateNested()
  none?: HealthProfessionalHasStructureWhereInputDto;
}
