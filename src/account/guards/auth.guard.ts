import {
  Injectable,
  CanActivate,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Permission } from '@open-monordo/bitfield-permission-manager';
import { ErrorEnum } from 'src/common/errors/code.error';
import { throwError } from 'src/common/errors/utils.error';
import { Account } from '../dtos/account.dto';
import { AccountEntity } from '../entities/account.entity';
import { AccountService } from '../services/account.service';

export const RequiredPermissions = (...perms: Permission[]) =>
  SetMetadata('RequiredPermissions', perms);

@Injectable()
export class GQLAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly accountService: AccountService,
  ) {}

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  getRequiredPermissions(context: ExecutionContext): Permission[] {
    return (
      this.reflector.get<Permission[]>(
        'RequiredPermissions',
        context.getHandler(),
      ) ?? []
    );
  }

  checkPermissions(context: ExecutionContext, account: Account.DTO) {
    const permissions = this.getRequiredPermissions(context);
    console.log(permissions);
    permissions.forEach((perm) => {
      if (!perm.can(BigInt(account.permissions))) {
        throwError(ErrorEnum.PERMISSION_ERROR, {
          messages: permissions.map((p) => `${p.name} permission is required`),
        });
      }
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = this.getRequest(context);
    const { 'api-key': apiKey } = request.headers;
    if (!apiKey) throwError(ErrorEnum.API_KEY_REQUIRED);
    if (!apiKey.startsWith('sk_')) throwError(ErrorEnum.API_KEY_INVALID);
    try {
      request.account = await this.accountService.unique({ secret: apiKey });
    } catch (error) {
      console.log(error);
      throwError(ErrorEnum.API_KEY_INVALID);
    }
    this.checkPermissions(context, request.account);
    return true;
  }
}
