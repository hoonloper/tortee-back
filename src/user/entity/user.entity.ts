import { Permission } from 'src/permission/entity/permission.entity';
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

  @ManyToOne(() => Permission, (permission) => permission.idx, {
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'Permission_idx' })
  permissionIdx: Permission;
}
