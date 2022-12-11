import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CurrentUserDto {
  @IsNotEmpty()
  @IsString()
  idx: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  baseUrl: string;

  @IsNotEmpty()
  @IsString()
  accessToken?: string;
}
