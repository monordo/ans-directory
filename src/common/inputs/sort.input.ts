import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsNullIfOtherIsDefined } from '../object-decorators/only-one-defined.decorator';

export enum FieldSortEnum {
  ASC = 'asc',
  DESC = 'desc',
}

registerEnumType(FieldSortEnum, {
  name: 'FieldSortEnum',
});

@InputType()
export class GetManyCommonSortDto {
  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  id?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  createdAt?: FieldSortEnum;

  @Field(() => FieldSortEnum, { nullable: true })
  @IsNullIfOtherIsDefined(0)
  updatedAt?: FieldSortEnum;
}
