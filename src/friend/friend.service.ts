import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import SendMentorRequestDto from './dtos/send-mentor-request.dto';
import { Friend } from './entities/firend.entity';
import { MentorRequest } from './entities/mentor-requests.entity';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private friendRepository: Repository<Friend>,
    @InjectRepository(MentorRequest)
    private mentorRequestRepository: Repository<MentorRequest>,
  ) {}

  sendMentorRequest(sendMentorRequest): Promise<InsertResult> {
    return this.mentorRequestRepository
      .createQueryBuilder()
      .insert()
      .into(MentorRequest)
      .values(sendMentorRequest)
      .execute();
  }
}
