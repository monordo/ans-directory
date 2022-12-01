import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRegistrationAuthorityInputDto {
  @Field()
  @IsNotEmpty()
  name: string;
}
