import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export default class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
