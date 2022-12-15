import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/auth/decorator/current-user.decorator';
import { CurrentUserDto } from 'src/auth/dtos/current-user.dto';
import { InsertResult } from 'typeorm';
import SendMentorRequestDto from './dtos/send-mentor-request.dto';
import { FriendService } from './friend.service';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @UseGuards(AuthGuard('google'))
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async sendMentorRequest(
    @CurrentUser() { idx }: CurrentUserDto,
    @Body() sendMentorRequest: SendMentorRequestDto,
  ): Promise<InsertResult> {
    return await this.friendService.sendMentorRequest({
      requestUserIdx: idx,
      ...sendMentorRequest,
    });
  }

  /* 이 아래부터 미테스트 API 목록 */
  @UseGuards(AuthGuard('google'))
  @HttpCode(HttpStatus.OK)
  @Get('request-list')
  async getFriendRequestList(
    @CurrentUser() { idx }: CurrentUserDto,
  ): Promise<any> {
    return await this.friendService.getFriendRequestList(idx);
  }

  @UseGuards(AuthGuard('google'))
  @HttpCode(HttpStatus.CREATED)
  @Post('acceptance')
  async addFriendRequest(
    @CurrentUser() currentUser: CurrentUserDto,
    @Body() friendRequest,
  ): Promise<any> {
    return await this.friendService.addFriendRequest(
      currentUser,
      friendRequest,
    );
  }
}
