import { EntityDto } from 'src/common/dtos/entity.dto';
import { Practice } from './practice.dto';
import { Role } from './role.dto';
import { Structure } from './structure.dto';

export namespace HealthProfessionalHasStructure {
  export class DTO extends EntityDto {
    healthProfessionalId: string;

    structureId: string;

    structure?: Structure.DTO;

    roleId?: string;

    role?: Role.DTO;

    practiceId?: string;

    practice?: Practice.DTO;
  }
}
