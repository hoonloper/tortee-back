import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { InsertResult, Repository } from 'typeorm';
import SignInDto from './dtos/sign-in.dto';
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

  async signIn({ email, password }: SignInDto): Promise<any> {
    const user: User = await this.userRepository
      .createQueryBuilder('user')
      .select([
        'user.idx',
        'user.nickname',
        'user.email',
        'user.isMentorship',
        'user.password',
      ])
      .where('user.email= :email', { email })
      .getOne();
    if (!user || password !== user.password) {
      throw new UnauthorizedException('정보가 일치하지 않습니다.');
    }
    const jwt = [user.nickname + user.email + user.isMentorship];
    return jwt;
  }
}
