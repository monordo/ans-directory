import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsNullIfOtherIsDefined } from '../object-decorators/only-one-defined.decorator';

@InputType()
export class GetManyCommonPaginationCursorDto {
  @Field()
  id: string;
}

@InputType()
export class GetManyCommonPaginationDto {
  @Field({ nullable: true })
  take?: number;

  @Field({ nullable: true })
  skip?: number;

  @Field(() => GetManyCommonPaginationCursorDto, { nullable: true })
  cursor?: GetManyCommonPaginationCursorDto;
}
