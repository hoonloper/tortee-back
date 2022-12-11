import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('mentor_requests')
export class MentorRequest {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar' })
  message: string;

  @CreateDateColumn({
    name: 'created_at',
    comment: '채팅방 생성일',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    comment: '채팅방 삭제일',
  })
  deletedAt: Date | null;

  @ManyToOne(() => User, (user) => user.requestUsers, {})
  @JoinColumn({ name: 'request_user_idx' })
  requestUserIdx: User;

  @ManyToOne(() => User, (user) => user.responseUsers, {})
  @JoinColumn({ name: 'response_user_idx' })
  responseUserIdx: User;
}
