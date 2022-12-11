import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friend } from './entities/firend.entity';
import { MentorRequest } from './entities/mentor-requests.entity';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';

@Module({
  imports: [TypeOrmModule.forFeature([Friend, MentorRequest])],
  controllers: [FriendController],
  providers: [FriendService],
})
export class FriendModule {}
