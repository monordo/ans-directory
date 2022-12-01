import { Field, InputType, PartialType } from '@nestjs/graphql';
import { GetUniqueCommonWhereDto } from 'src/common/inputs/get-unique.input';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';
import { CreateActivitySectorInputDto } from './activity-sector.input';
import { CreateActivityInputDto } from './activity.input';
import { CreateRegistrationAuthorityInputDto } from './registration-authority.input';

@InputType()
export class CreateStructureInputDto {
  @Field()
  SIRET: string;

  @Field({ nullable: true })
  SIREN?: string;

  @Field({ nullable: true })
  FINESS?: string;

  @Field({ nullable: true })
  legalFINESS?: string;

  @Field({ nullable: true })
  technicalId?: string;

  @Field({ nullable: true })
  companyName?: string;

  @Field({ nullable: true })
  comercialSign?: string;

  @Field(() => [String], { nullable: true })
  oldIdentifiers?: string[];

  @Field(() => CreateActivitySectorInputDto, { nullable: true })
  sector?: CreateActivitySectorInputDto;

  @Field(() => CreateActivityInputDto, { nullable: true })
  activity?: CreateActivityInputDto;

  @Field(() => CreateRegistrationAuthorityInputDto, {
    nullable: true,
  })
  registrationAuthority?: CreateRegistrationAuthorityInputDto;
}

@InputType()
export class UpdateStructureInputDto extends PartialType(
  CreateStructureInputDto,
) {}

@InputType()
export class UniqueStructureInputDto extends GetUniqueCommonWhereDto {
  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  SIRET?: string;
}
