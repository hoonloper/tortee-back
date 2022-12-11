import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CurrentUserDto } from 'src/auth/dtos/current-user.dto';
import { InsertResult, Repository } from 'typeorm';
import SearchUserDto from './dtos/search-users.dto';
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

  saveUser(user: CurrentUserDto): Promise<InsertResult> {
    return this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
  }

  findAllUsers({ email, name }: SearchUserDto): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder('users')
      .select([
        'users.idx',
        'users.name',
        'users.email',
        'users.baseUrl',
        'users.isMentorship',
      ])
      .where('users.email = :email', { email })
      .orWhere('users.name = :name', { name })
      .getMany();
  }
}
