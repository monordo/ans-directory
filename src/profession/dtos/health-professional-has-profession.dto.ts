import { EntityDto } from 'src/common/dtos/entity.dto';
import { Profession } from './profession.dto';

export namespace HealthProfessionalHasProfession {
  export class DTO extends EntityDto {
    healthProfessionalId: string;

    professionId: string;

    profession?: Profession.DTO;
  }
}
