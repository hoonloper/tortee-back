import { Controller, Get, Query } from '@nestjs/common';
import SearchUserDto from './dtos/search-users.dto';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('search')
  async findAllUsers(@Query() searchUser: SearchUserDto): Promise<User[]> {
    return await this.userService.findAllUsers(searchUser);
  }
}
