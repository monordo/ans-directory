import { EntityDto } from 'src/common/dtos/entity.dto';
import { KnowHow } from './know-how.dto';

export namespace HealthProfessionalHasKnowHow {
  export class DTO extends EntityDto {
    healthProfessionalId: string;

    knowHowId: string;

    knowHow?: KnowHow.DTO;
  }
}
