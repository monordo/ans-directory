import { EntityDto } from 'src/common/dtos/entity.dto';
import { PharmacistInformation } from './pharmacist-information.dto';

export namespace HealthProfessionalHasPharmacistInformation {
  export class DTO extends EntityDto {
    healthProfessionalId: string;

    pharmacistInformationId: string;

    pharmacistInformation?: PharmacistInformation.DTO;
  }
}
