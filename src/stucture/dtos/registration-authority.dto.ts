import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace RegistrationAuthority {
  @ObjectType()
  export class RegistrationAuthority extends EntityDto {
    @Field()
    name: string;
  }

  export class DTO extends RegistrationAuthority {}
}
