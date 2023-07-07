//class-validators
import { MESSAGES } from "@nestjs/core/constants";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import isEmail from 'validator/lib/isEmail'

//custom-decorators
import { ContainsPasswordCriteria } from "src/common/decorators/contains-password-criteria.decorator";

export class AuthDto {
    @IsEmail()
    email: string;

    @IsNotEmpty({message:"אי אפשר להשאיר ריק"})
    @ContainsPasswordCriteria({message:"הסיסמה חייבת להכיל לפחות את אות אנגלית אחת גדולה, אות אנגלית  אחת קטנה, ספרה אחת וסימן מיוחד(!@#$%^&*(),.?) אחד"})
    password:string;
  }

export class PasswordDto{
  @IsNotEmpty({message:"אי אפשר להשאיר ריק"})
  @ContainsPasswordCriteria({message:"הסיסמה חייבת להכיל לפחות את אות אנגלית אחת גדולה, אות אנגלית  אחת קטנה, ספרה אחת וסימן מיוחד(!@#$%^&*(),.?) אחד"})
  password: string;
}

export class CodeDto{
  @Length(6)
  code:string;
}

