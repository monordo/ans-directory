import {
  AbstractPermissionModel,
  Perm,
  Permission,
} from '@open-monordo/bitfield-permission-manager';

export class GeneralPermissions extends AbstractPermissionModel {
  @Perm(1)
  static readonly CREATE_ACCOUNT: Permission;

  @Perm(2)
  static readonly UPDATE_ACCOUNT: Permission;

  @Perm(3)
  static readonly DELETE_ACCOUNT: Permission;

  @Perm(4)
  static readonly GET_MANY_ACCOUNT: Permission;

  @Perm(5)
  static readonly GET_ACCOUNT: Permission;

  //

  @Perm(6)
  static readonly CREATE_HEALTH_PROFESSIONAL: Permission;

  @Perm(7)
  static readonly UPDATE_HEALTH_PROFESSIONAL: Permission;

  @Perm(8)
  static readonly DELETE_HEALTH_PROFESSIONAL: Permission;

  @Perm(9)
  static readonly GET_MANY_HEALTH_PROFESSIONAL: Permission;

  @Perm(10)
  static readonly GET_HEALTH_PROFESSIONAL: Permission;

  //
}
