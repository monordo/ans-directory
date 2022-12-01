import { ErrorEnum } from './code.error';
import { ErrorDatailsDto, ProcessError } from './model.error';

export const throwError = (
  error: ErrorEnum,
  details?: ErrorDatailsDto,
): void => {
  throw new ProcessError(error, details);
};
