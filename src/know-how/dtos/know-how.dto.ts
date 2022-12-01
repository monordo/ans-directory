import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace KnowHow {
  export class DTO extends EntityDto {
    knowHowTypeCode: string;

    knowHowTypeLabel: string;

    knowHowCode: string;

    knowHowLabel: string;
  }
}
