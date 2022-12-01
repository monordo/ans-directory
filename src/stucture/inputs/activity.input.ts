import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateActivityInputDto {
  @Field()
  @IsNotEmpty()
  activityCode: string;

  @Field()
  @IsNotEmpty()
  activityLabel: string;
}
