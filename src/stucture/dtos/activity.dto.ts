import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace Activity {
  @ObjectType()
  export class Activity extends EntityDto {
    @Field()
    activityCode: string;

    @Field()
    activityLabel: string;
  }

  export class DTO extends Activity {}
}
