import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EntityDto {
  @Field()
  id?: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}

@ObjectType()
export class EntityInitArgs<T = unknown, U = never> {
  where: T;

  include?: U;

  throwError?: false;
}

// @ObjectType()
// export class ArrayEntityDto {
//   @Field()
//   total: number;

//   @Field()
//   count: number;
// }

// export class TokenEntityDto {
//   id?: string;

//   createdAt?: Date;

//   updatedAt?: Date;

//   token: string;

//   isRevoked: boolean;

//   createdById?: string;
// }
