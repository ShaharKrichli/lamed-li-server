import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function ContainsPasswordCriteria(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'containsPasswordCriteria',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?])/.test(value);
          return regex;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must contain at least 1 uppercase, 1 lowercase, 1 digit, and 1 symbol (!@#$%^&*(),.?)`;
        },
      },
    });
  };
}
