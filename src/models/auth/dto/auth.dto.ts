//class-validators
import { IsEmail, IsNotEmpty, Length } from "class-validator";

//custom-decorators
import { ContainsPasswordCriteria } from "src/common/decorators/contains-password-criteria.decorator";

export class AuthDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password:string;
  }

export class PasswordDto{
  @IsNotEmpty()
  @ContainsPasswordCriteria()
  password: string;
}

export class CodeDto{
  @Length(6)
  code:string;
}

