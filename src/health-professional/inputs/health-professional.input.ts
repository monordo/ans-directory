import { Field, InputType, PartialType } from '@nestjs/graphql';
import { GetUniqueCommonWhereDto } from 'src/common/inputs/get-unique.input';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';

@InputType()
export class CreateHealthProfessionalInputDto {
  @Field({ nullable: true })
  PPIdentifierType?: string;

  @Field()
  PPIdentifier: string;

  @Field()
  nationalPPIdentifier: string;

  @Field({ nullable: true })
  practiceCivilityCode?: string;

  @Field({ nullable: true })
  practiceCivilityLabel?: string;

  @Field({ nullable: true })
  civilityCode?: string;

  @Field({ nullable: true })
  civilityLabel?: string;

  @Field()
  lastname: string;

  @Field()
  firstname: string;
}

@InputType()
export class UpdateHealthProfessionalInputDto extends PartialType(
  CreateHealthProfessionalInputDto,
) {}

@InputType()
export class UniqueHealthProfessionalInputDto extends GetUniqueCommonWhereDto {
  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  PPIdentifier?: string;

  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  nationalPPIdentifier?: string;
}
