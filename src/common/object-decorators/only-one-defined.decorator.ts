import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint()
export class IsNullIfOtherIsDefinedContraint
  implements ValidatorConstraintInterface
{
  validate(text: string, validationArguments: ValidationArguments) {
    const check = Object.keys(validationArguments.object).filter(
      (key) =>
        validationArguments.object[key] !== undefined &&
        validationArguments.object[key] !== null,
    );
    const [minimumRequired] = validationArguments.constraints;
    if (check.length === 0 && minimumRequired !== 0) return false;
    if (check.length !== 1 && check.includes(validationArguments.property))
      return false;
    return true;
  }

  public defaultMessage(args: ValidationArguments) {
    // Set the default error message here
    return `${args.property} need to be defined if other fields is undefined`;
  }
}

export function IsNullIfOtherIsDefined(
  minimumRequired = 1,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsNullIfOtherIsDefined',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minimumRequired],
      options: validationOptions,
      validator: IsNullIfOtherIsDefinedContraint,
    });
  };
}
