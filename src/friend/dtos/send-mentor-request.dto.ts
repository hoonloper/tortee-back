import { IsNotEmpty, IsString } from 'class-validator';

export default class SendMentorRequestDto {
  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  responseUserIdx: string;
}
