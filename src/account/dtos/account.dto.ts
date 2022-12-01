import { EntityDto } from 'src/common/dtos/entity.dto';

export namespace Account {
  export class DTO extends EntityDto {
    email: string;

    company?: string;

    description?: string;

    secret: string;

    isActivated: boolean;

    permissions: string;
  }
}
