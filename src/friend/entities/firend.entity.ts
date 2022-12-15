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

@Entity('friends')
export class Friend {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'boolean', name: 'is_connected', default: 0 })
  isConnected: boolean;

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

  @ManyToOne(() => User, (user) => user.friendMentors, {})
  @JoinColumn({ name: 'mentor_idx' })
  mentorIdx: User;

  @ManyToOne(() => User, (user) => user.friendMentees, {})
  @JoinColumn({ name: 'mentee_idx' })
  menteeIdx: User;
}
