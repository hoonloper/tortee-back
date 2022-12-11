import { Chat } from 'src/chat/entity/chat.entity';
import { Chatroom } from 'src/chatroom/entity/chatroom.entity';
import { Friend } from 'src/friend/entities/firend.entity';
import { MentorRequest } from 'src/friend/entities/mentor-requests.entity';
import { Permission } from 'src/permission/entity/permission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  nickname: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'boolean', name: 'is_mentorship' })
  isMentorship: boolean;

  @CreateDateColumn({
    name: 'created_at',
    comment: '생성일',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    comment: '수정일',
  })
  updatedAt: Date | null;

  @DeleteDateColumn({
    name: 'deleted_at',
    comment: '삭제일',
  })
  deletedAt: Date | null;

  @ManyToOne(() => Permission, (permission) => permission.users, {})
  @JoinColumn({ name: 'permission_idx' })
  permissionIdx: Permission;

  @OneToMany(() => Friend, (friend) => friend.mentorIdx)
  friendMentors: Friend[];

  @OneToMany(() => Friend, (friend) => friend.menteeIdx)
  friendMentees: Friend[];

  @OneToMany(
    () => MentorRequest,
    (mentorRequest) => mentorRequest.requestUserIdx,
  )
  requestUsers: MentorRequest[];

  @OneToMany(
    () => MentorRequest,
    (mentorRequest) => mentorRequest.responseUserIdx,
  )
  responseUsers: MentorRequest[];

  @OneToMany(() => Chatroom, (chatroom) => chatroom.mentorIdx)
  chatroomMentors: Chatroom[];

  @OneToMany(() => Chatroom, (chatroom) => chatroom.menteeIdx)
  chatroomMentees: Chatroom[];

  @OneToMany(() => Chat, (chat) => chat.sendedUserIdx)
  sendedUserChats: Chat[];

  @OneToMany(() => Chat, (chat) => chat.receivedUserIdx)
  receivedUserChats: Chat[];
}
