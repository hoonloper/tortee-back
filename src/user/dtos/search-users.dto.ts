import { IsEmail, IsOptional, IsString } from 'class-validator';

export default class SearchUserDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string;
}
