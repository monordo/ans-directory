import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace PharmacistInformation {
  export class DTO extends EntityDto {
    sectionCode: string;

    sectionLabel: string;
  }
}
