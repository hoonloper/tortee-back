import { DataSource } from 'typeorm';
import { Chatroom } from './entity/chatroom.entity';

export const chatroom = [
  {
    provide: 'CHATROOM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Chatroom),
    inject: ['DATA_SOURCE'],
  },
];
