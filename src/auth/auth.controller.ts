import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './decorator/current-user.decorator';
import { CurrentUserDto } from './dtos/current-user.dto';
import { InsertResult } from 'typeorm';
import { User } from 'src/user/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth(): void {
    // redirect google login page
    return;
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(
    @CurrentUser() user: CurrentUserDto,
  ): Promise<User | InsertResult> {
    const findedUser: User = await this.userService.findUser(user.email);
    if (findedUser) {
      return findedUser;
    }
    const { raw }: InsertResult = await this.userService.saveUser(user);
    return { ...user, ...raw[0] };
  }
}
