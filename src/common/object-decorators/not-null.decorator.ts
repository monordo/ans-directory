import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';

@ValidatorConstraint()
export class IsNotNullContraint implements ValidatorConstraintInterface {
  validate(text: string, validationArguments: ValidationArguments) {
    return !(validationArguments.value === null);
  }

  public defaultMessage(args: ValidationArguments) {
    // Set the default error message here
    return `${args.property} need to be defined or undefined (not use Null)`;
  }
}

export function IsNotNull(
  minimumRequired = 1,
  validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsNotNull',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minimumRequired],
      options: validationOptions,
      validator: IsNotNullContraint,
    });
  };
}
