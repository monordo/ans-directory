import {
  AbstractPermissionModel,
  MixedPermission,
  Perm,
  Permission,
} from '@open-monordo/bitfield-permission-manager';
import { MixedPerm } from '@open-monordo/bitfield-permission-manager/lib/decorators';

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

  @Perm(11)
  static readonly CREATE_KNOW_HOW: Permission;

  @Perm(12)
  static readonly UPDATE_KNOW_HOW: Permission;

  @Perm(13)
  static readonly DELETE_KNOW_HOW: Permission;

  @Perm(14)
  static readonly GET_MANY_KNOW_HOW: Permission;

  @Perm(15)
  static readonly GET_KNOW_HOW: Permission;

  //

  @Perm(16)
  static readonly CREATE_PROFESSION: Permission;

  @Perm(17)
  static readonly UPDATE_PROFESSION: Permission;

  @Perm(18)
  static readonly DELETE_PROFESSION: Permission;

  @Perm(19)
  static readonly GET_MANY_PROFESSION: Permission;

  @Perm(20)
  static readonly GET_PROFESSION: Permission;

  //

  @Perm(21)
  static readonly CREATE_HP_HAS_KNOW_HOW: Permission;

  @Perm(22)
  static readonly UPDATE_HP_HAS_KNOW_HOW: Permission;

  @Perm(23)
  static readonly DELETE_HP_HAS_KNOW_HOW: Permission;

  @Perm(24)
  static readonly GET_MANY_HP_HAS_KNOW_HOW: Permission;

  @Perm(25)
  static readonly GET_HP_HAS_KNOW_HOW: Permission;

  //

  @Perm(26)
  static readonly CREATE_HP_HAS_PROFESSION: Permission;

  @Perm(27)
  static readonly UPDATE_HP_HAS_PROFESSION: Permission;

  @Perm(28)
  static readonly DELETE_HP_HAS_PROFESSION: Permission;

  @Perm(29)
  static readonly GET_MANY_HP_HAS_PROFESSION: Permission;

  @Perm(30)
  static readonly GET_HP_HAS_PROFESSION: Permission;

  //

  @Perm(31)
  static readonly CREATE_PHARMACIST_INFORMATION: Permission;

  @Perm(32)
  static readonly UPDATE_PHARMACIST_INFORMATION: Permission;

  @Perm(33)
  static readonly DELETE_PHARMACIST_INFORMATION: Permission;

  @Perm(34)
  static readonly GET_MANY_PHARMACIST_INFORMATION: Permission;

  @Perm(35)
  static readonly GET_PHARMACIST_INFORMATION: Permission;

  //

  @Perm(36)
  static readonly CREATE_HP_HAS_PHARMACIST_INFORMATION: Permission;

  @Perm(37)
  static readonly UPDATE_HP_HAS_PHARMACIST_INFORMATION: Permission;

  @Perm(38)
  static readonly DELETE_HP_HAS_PHARMACIST_INFORMATION: Permission;

  @Perm(39)
  static readonly GET_MANY_HP_HAS_PHARMACIST_INFORMATION: Permission;

  @Perm(40)
  static readonly GET_HP_HAS_PHARMACIST_INFORMATION: Permission;

  //

  @Perm(41)
  static readonly CREATE_STRUCTURE: Permission;

  @Perm(42)
  static readonly UPDATE_STRUCTURE: Permission;

  @Perm(43)
  static readonly DELETE_STRUCTURE: Permission;

  @Perm(44)
  static readonly GET_MANY_STRUCTURE: Permission;

  @Perm(45)
  static readonly GET_STRUCTURE: Permission;

  //

  @Perm(46)
  static readonly CREATE_HP_HAS_STRUCTURE: Permission;

  @Perm(47)
  static readonly UPDATE_HP_HAS_STRUCTURE: Permission;

  @Perm(48)
  static readonly DELETE_HP_HAS_STRUCTURE: Permission;

  @Perm(49)
  static readonly GET_MANY_HP_HAS_STRUCTURE: Permission;

  @Perm(50)
  static readonly GET_HP_HAS_STRUCTURE: Permission;

  @MixedPerm([
    GeneralPermissions.CREATE_ACCOUNT,
    GeneralPermissions.UPDATE_ACCOUNT,
    GeneralPermissions.DELETE_ACCOUNT,
    GeneralPermissions.GET_MANY_ACCOUNT,
    GeneralPermissions.GET_ACCOUNT,
    GeneralPermissions.CREATE_HEALTH_PROFESSIONAL,
    GeneralPermissions.UPDATE_HEALTH_PROFESSIONAL,
    GeneralPermissions.DELETE_HEALTH_PROFESSIONAL,
    GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL,
    GeneralPermissions.GET_HEALTH_PROFESSIONAL,
    GeneralPermissions.CREATE_KNOW_HOW,
    GeneralPermissions.UPDATE_KNOW_HOW,
    GeneralPermissions.DELETE_KNOW_HOW,
    GeneralPermissions.GET_MANY_KNOW_HOW,
    GeneralPermissions.GET_KNOW_HOW,
    GeneralPermissions.CREATE_PROFESSION,
    GeneralPermissions.UPDATE_PROFESSION,
    GeneralPermissions.DELETE_PROFESSION,
    GeneralPermissions.GET_MANY_PROFESSION,
    GeneralPermissions.GET_PROFESSION,
    GeneralPermissions.CREATE_HP_HAS_KNOW_HOW,
    GeneralPermissions.UPDATE_HP_HAS_KNOW_HOW,
    GeneralPermissions.DELETE_HP_HAS_KNOW_HOW,
    GeneralPermissions.GET_MANY_HP_HAS_KNOW_HOW,
    GeneralPermissions.GET_HP_HAS_KNOW_HOW,
    GeneralPermissions.CREATE_HP_HAS_PROFESSION,
    GeneralPermissions.UPDATE_HP_HAS_PROFESSION,
    GeneralPermissions.DELETE_HP_HAS_PROFESSION,
    GeneralPermissions.GET_MANY_HP_HAS_PROFESSION,
    GeneralPermissions.GET_HP_HAS_PROFESSION,
    GeneralPermissions.CREATE_PHARMACIST_INFORMATION,
    GeneralPermissions.UPDATE_PHARMACIST_INFORMATION,
    GeneralPermissions.DELETE_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_MANY_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_PHARMACIST_INFORMATION,
    GeneralPermissions.CREATE_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.UPDATE_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.DELETE_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_MANY_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.CREATE_STRUCTURE,
    GeneralPermissions.UPDATE_STRUCTURE,
    GeneralPermissions.DELETE_STRUCTURE,
    GeneralPermissions.GET_MANY_STRUCTURE,
    GeneralPermissions.GET_STRUCTURE,
    GeneralPermissions.CREATE_HP_HAS_STRUCTURE,
    GeneralPermissions.UPDATE_HP_HAS_STRUCTURE,
    GeneralPermissions.DELETE_HP_HAS_STRUCTURE,
    GeneralPermissions.GET_MANY_HP_HAS_STRUCTURE,
    GeneralPermissions.GET_HP_HAS_STRUCTURE,
  ])
  static readonly ADMIN: MixedPermission;

  @MixedPerm([
    GeneralPermissions.GET_MANY_ACCOUNT,
    GeneralPermissions.GET_ACCOUNT,
    GeneralPermissions.GET_MANY_HEALTH_PROFESSIONAL,
    GeneralPermissions.GET_HEALTH_PROFESSIONAL,
    GeneralPermissions.GET_MANY_KNOW_HOW,
    GeneralPermissions.GET_KNOW_HOW,
    GeneralPermissions.GET_MANY_PROFESSION,
    GeneralPermissions.GET_PROFESSION,
    GeneralPermissions.GET_MANY_HP_HAS_KNOW_HOW,
    GeneralPermissions.GET_HP_HAS_KNOW_HOW,
    GeneralPermissions.GET_MANY_HP_HAS_PROFESSION,
    GeneralPermissions.GET_HP_HAS_PROFESSION,
    GeneralPermissions.GET_MANY_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_MANY_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_HP_HAS_PHARMACIST_INFORMATION,
    GeneralPermissions.GET_MANY_STRUCTURE,
    GeneralPermissions.GET_STRUCTURE,
    GeneralPermissions.GET_MANY_HP_HAS_STRUCTURE,
    GeneralPermissions.GET_HP_HAS_STRUCTURE,
  ])
  static readonly BASIC_GET: MixedPermission;
}
