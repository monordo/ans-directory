import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsNumber, IsNumberString } from 'class-validator';
import { IsNullIfOtherIsDefined } from 'src/common/object-decorators/only-one-defined.decorator';

@InputType()
export class CreateAccountInputDto {
  @Field()
  email: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  isActivated?: boolean;

  @Field()
  @IsNumberString()
  permissions: string;
}

@InputType()
export class UpdateAccountInputDto extends PartialType(CreateAccountInputDto) {}

@InputType()
export class UniqueAccountInputDto {
  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  id?: string;

  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  email?: string;

  @Field({ nullable: true })
  @IsNullIfOtherIsDefined()
  secret?: string;
}
