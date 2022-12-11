import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import SignInDto from './dtos/sign-in.dto';
import SignUpDto from './dtos/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() user: SignUpDto): Promise<SignUpDto> {
    const findedUser: User = await this.userService.findUser(user.email);
    if (findedUser) {
      throw new BadRequestException('이미 존재하는 이메일');
    }
    return await this.authService.signUp(user);
  }

  @Post('sign-in')
  async signIn(@Body() user: SignInDto): Promise<any> {
    return await this.authService.signIn(user);
  }
}
