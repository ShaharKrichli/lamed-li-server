//class-validators
import { MESSAGES } from "@nestjs/core/constants";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import isEmail from 'validator/lib/isEmail'

//custom-decorators
import { ContainsPasswordCriteria } from "src/common/decorators/contains-password-criteria.decorator";
//Messeges
import { emptyMessge, specialcharerctersMessge } from "src/common/constants/DtoMessges";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty({message:emptyMessge})
    email: string;

    @IsNotEmpty({message:emptyMessge})
    @ContainsPasswordCriteria({message:specialcharerctersMessge})
    password:string;

    @IsNotEmpty({message:emptyMessge})
    name: string;


  }

export class PasswordDto{
  @IsNotEmpty({message:emptyMessge})
  @ContainsPasswordCriteria({message:specialcharerctersMessge})
  password: string;
}

export class CodeDto{
  @Length(6)
  code:string;
}

