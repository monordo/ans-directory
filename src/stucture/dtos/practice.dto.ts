import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace Practice {
  @ObjectType()
  export class Practice extends EntityDto {
    @Field()
    practiceCode: string;

    @Field()
    practiceLabel: string;
  }

  export class DTO extends Practice {}
}
