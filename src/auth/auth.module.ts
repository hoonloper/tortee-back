import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.startegy';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [UserService, GoogleStrategy],
})
export class AuthModule {}
