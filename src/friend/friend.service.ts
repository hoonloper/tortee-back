import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
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

  getFriendRequestList(idx: string): Promise<MentorRequest[]> {
    return this.mentorRequestRepository
      .createQueryBuilder('fr')
      .select()
      .where('fr.responseUserIdx = :idx', { idx })
      .getMany();
  }

  async addFriendRequest(
    { idx },
    { friendRequestUserIdx, requestIdx },
  ): Promise<InsertResult> {
    // 유저 아이디랑 요청 아이디 데이터 있는지 확인

    // 일치하는 데이터 있으면 삭제
    const deletedResult = await this.mentorRequestRepository
      .createQueryBuilder()
      .delete()
      .from(MentorRequest)
      .where('mentor_requests.idx = :requestIdx', { requestIdx })
      .execute();

    // 친구 목록에 추가
    return await this.friendRepository
      .createQueryBuilder()
      .insert()
      .into(Friend)
      .values({ mentorIdx: idx, menteeIdx: friendRequestUserIdx })
      .execute();
  }
}
