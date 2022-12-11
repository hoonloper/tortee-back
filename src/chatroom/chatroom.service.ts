import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Chatroom } from './entity/chatroom.entity';

@Injectable()
export class ChatroomService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Chatroom>,
  ) {}
}
