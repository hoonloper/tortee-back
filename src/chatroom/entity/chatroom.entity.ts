import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('chatrooms')
export class Chatroom {
  @PrimaryGeneratedColumn()
  idx: number;

  @CreateDateColumn({
    name: 'created_at',
    comment: '채팅방 생성일',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    comment: '채팅방 수정일',
  })
  updatedAt: Date | null;

  @DeleteDateColumn({
    name: 'deleted_at',
    comment: '채팅방 삭제일',
  })
  deletedAt: Date | null;

  @ManyToOne(() => User, (user) => user, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'mentor_idx' })
  mentorIdx: User;

  @ManyToOne(() => User, (user) => user, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'mentee_idx' })
  menteeIdx: User;
}
