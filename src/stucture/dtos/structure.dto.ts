import { Field, ObjectType } from '@nestjs/graphql';
import { EntityDto } from 'src/common/dtos/entity.dto';
import { ActivitySector } from './activity-sector.dto';
import { Activity } from './activity.dto';
import { RegistrationAuthority } from './registration-authority.dto';

export namespace Structure {
  export class DTO extends EntityDto {
    SIRET: string;

    SIREN?: string;

    FINESS?: string;

    legalFINESS?: string;

    technicalId?: string;

    companyName?: string;

    comercialSign?: string;

    oldIdentifiers: string[];

    sectorId?: string;

    sector?: ActivitySector.DTO;

    activityId?: string;

    activity?: Activity.DTO;

    registrationAuthorityId?: string;

    registrationAuthority?: RegistrationAuthority.DTO;
  }
}
