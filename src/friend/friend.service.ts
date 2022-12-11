import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
