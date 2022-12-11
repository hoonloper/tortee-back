import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('chatrooms')
export class Chat {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar' })
  message: string;

  @CreateDateColumn({
    name: 'created_at',
    comment: '채팅방 생성일',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'sended_user_idx' })
  sendedUserIdx: User;

  @ManyToOne(() => User, (user) => user, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'received_user_idx' })
  receivedUserIdx: User;
}
