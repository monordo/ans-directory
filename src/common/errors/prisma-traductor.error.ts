import { Logger } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { error } from 'console';
import { ErrorEnum } from './code.error';
import { ErrorDatailsDto } from './model.error';
import { throwError } from './utils.error';

export class PrismaErrorTraductor {
  relation = {
    P2002: (meta: { target: string[] }, objectName: string) =>
      `${meta?.target
        .map((value: string) => `${objectName}.${value}`)
        .join(', ')} already exist whith this value${
        meta?.target.length > 1 ? 's' : ''
      }`,
    P2025: (meta: { cause: string }, objectName: string) =>
      meta?.cause ?? `${objectName} not found`,
    P2014: (
      meta: {
        relation_name: string;
        model_a_name: string;
        model_b_name: string;
      },
      objectName: string,
    ) =>
      `The relation ${meta?.relation_name} between ${meta?.model_a_name} and ${meta?.model_b_name} already exist`,
  };

  constructor(
    private readonly error: PrismaClientKnownRequestError,
    private readonly objectName: string,
  ) {
    if (this.error.code && !this.relation[this.error.code])
      Logger.debug('PRISMA CODE ERROR NOT DOCUMENTED', this.error.code);
  }

  getMessage = (): string => {
    const check = this.relation[this.error.code];
    if (!check) return this.error.message;
    return check(this.error.meta, this.objectName);
  };

  throwError = (error: ErrorEnum, details: ErrorDatailsDto = {}) =>
    throwError(error, {
      ...details,
      messages: [this.getMessage()],
    });
}
