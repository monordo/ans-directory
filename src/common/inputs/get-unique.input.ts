import { Field, InputType } from '@nestjs/graphql';
import { IsNotNull } from '../object-decorators/not-null.decorator';
import { IsNullIfOtherIsDefined } from '../object-decorators/only-one-defined.decorator';

@InputType()
export class GetUniqueCommonWhereDto {
  @Field(() => String, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  id?: string;
}
