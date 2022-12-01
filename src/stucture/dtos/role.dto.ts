import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace Role {
  @ObjectType()
  export class Role extends EntityDto {
    @Field()
    roleCode: string;

    @Field()
    roleLabel: string;
  }

  export class DTO extends Role {}
}
