
//validation
import { ValidatorOptions } from "class-validator";
import { ValidationError } from "sequelize";



export interface ValidationPipeOptions extends ValidatorOptions {
    transform?: boolean;
    disableErrorMessages?: boolean;
    exceptionFactory?: (errors: ValidationError[]) => any;
  }