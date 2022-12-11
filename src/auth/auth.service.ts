import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { InsertResult, Repository } from 'typeorm';
import SignUpDto from './dtos/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async signUp(user: SignUpDto): Promise<SignUpDto> {
    await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(user)
      .execute();
    return user;
  }
}
