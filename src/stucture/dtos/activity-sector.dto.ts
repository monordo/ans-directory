import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace ActivitySector {
  @ObjectType()
  export class ActivitySector extends EntityDto {
    @Field()
    sectorCode: string;

    @Field()
    sectorLabel: string;
  }

  export class DTO extends ActivitySector {}
}
