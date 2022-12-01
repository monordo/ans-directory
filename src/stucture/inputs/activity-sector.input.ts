import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateActivitySectorInputDto {
  @Field()
  @IsNotEmpty()
  sectorCode: string;

  @Field()
  @IsNotEmpty()
  sectorLabel: string;
}
