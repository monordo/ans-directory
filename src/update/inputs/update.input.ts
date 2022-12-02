import { registerEnumType } from '@nestjs/graphql';

export enum UpdateTypeEnum {
  KNOW_HOW = 'KNOW_HOW',
  ACTIVITY = 'ACTIVITY',
}

export type UpdateTypeType = keyof typeof UpdateTypeEnum;

registerEnumType(UpdateTypeEnum, {
  name: 'UpdateTypeEnum',
  description: 'Type of update',
});
