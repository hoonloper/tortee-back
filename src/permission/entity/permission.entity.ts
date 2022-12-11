import { User } from 'src/user/entity/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn({
    name: 'created_at',
    comment: '생성일',
  })
  createdAt: Date;

  @OneToMany(() => User, (user) => user.permissionIdx)
  users: User[];
}
