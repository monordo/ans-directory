import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { IsNotNull } from '../object-decorators/not-null.decorator';

export enum QueryModeEnum {
  default = 'default',
  insensitive = 'insensitive',
}

export type QueryModeType = keyof typeof QueryModeEnum;

registerEnumType(QueryModeEnum, {
  name: 'QueryMode',
});

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date;

  @Field(() => Date, { nullable: true })
  lt?: Date;

  @Field(() => Date, { nullable: true })
  lte?: Date;

  @Field(() => Date, { nullable: true })
  gt?: Date;

  @Field(() => Date, { nullable: true })
  gte?: Date;
}

@InputType()
export class GetManyWhereDto {
  @Field(() => String, { nullable: true })
  @IsNotNull()
  id?: string;

  @Field(() => DateTimeFilter, { nullable: true })
  @IsNotNull()
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  @IsNotNull()
  updatedAt?: DateTimeFilter;
}

@InputType()
export class GetManyStringNullableFilterDto {
  @Field(() => String, { nullable: true })
  equals?: string | null;

  @Field(() => [String], { nullable: true })
  in?: string[] | null;

  @Field(() => [String], { nullable: true })
  notIn?: string[] | null;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  lt?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  lte?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  gt?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  gte?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  @IsNotNull()
  contains?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  startsWith?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  endsWith?: string;

  @Field(() => QueryModeEnum, { nullable: true })
  @IsNotNull()
  mode?: QueryModeType;
}

@InputType()
export class GetManyStringFilterDto {
  @Field(() => String, { nullable: true })
  @IsNotNull()
  equals?: string;

  @Field(() => [String], { nullable: true })
  @IsNotNull()
  in?: string[];

  @Field(() => [String], { nullable: true })
  @IsNotNull()
  notIn?: string[];

  @Field(() => String, { nullable: true })
  @IsNotNull()
  lt?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  lte?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  gt?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  gte?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  contains?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  startsWith?: string;

  @Field(() => String, { nullable: true })
  @IsNotNull()
  endsWith?: string;

  @Field(() => QueryModeEnum, { nullable: true })
  @IsNotNull()
  mode?: QueryModeType;
}
