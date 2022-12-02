import { EntityDto } from 'src/common/dtos/entity.dto';
import { HealthProfessionalHasKnowHow } from 'src/know-how/dtos/health-professional-has-know-how.dto';
import { HealthProfessionalHasPharmacistInformation } from 'src/pharmacist-information/dtos/health-professional-has-pharmacist-information.dto';
import { PharmacistInformation } from 'src/pharmacist-information/dtos/pharmacist-information.dto';
import { HealthProfessionalHasProfession } from 'src/profession/dtos/health-professional-has-profession.dto';
import { HealthProfessionalHasStructure } from 'src/stucture/dtos/health-professional-has-structure.dto';

export namespace HealthProfessional {
  export class DTO extends EntityDto {
    PPIdentifierType?: string;

    PPIdentifier: string;

    nationalPPIdentifier: string;

    practiceCivilityCode?: string;

    practiceCivilityLabel?: string;

    civilityCode?: string;

    civilityLabel?: string;

    lastname: string;

    firstname: string;

    knowHow?: HealthProfessionalHasKnowHow.DTO[];

    professions?: HealthProfessionalHasProfession.DTO[];

    pharinformations?: HealthProfessionalHasPharmacistInformation.DTO[];

    structures?: HealthProfessionalHasStructure.DTO[];
  }
}
