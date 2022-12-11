import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrentUserDto } from 'src/auth/dtos/current-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findUser(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  saveUser(user: CurrentUserDto) {
    return this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }
}
