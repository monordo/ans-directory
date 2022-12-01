import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace Profession {
  export class DTO extends EntityDto {
    professionCategoryCode: string;

    professionCategoryLabel: string;

    professionCode: string;

    professionLabel: string;
  }
}
