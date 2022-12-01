import { EntityDto } from 'src/common/dtos/entity.dto';
import { HealthProfessionalHasKnowHow } from 'src/know-how/dtos/health-professional-has-know-how.dto';

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
  }
}
