import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Chat } from 'src/chat/entity/chat.entity';
import { Chatroom } from 'src/chatroom/entity/chatroom.entity';
import { Friend } from 'src/friend/entities/firend.entity';
import { MentorRequest } from 'src/friend/entities/mentor-requests.entity';
import { User } from 'src/user/entity/user.entity';

export const POSTGRESQL_CONFIG: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    timezone: configService.get<string>('TIME_ZONE'),
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    synchronize: configService.get<boolean>('DB_SYNCHRONIZE'),
    logging: configService.get<boolean>('DB_LOGGING'),
    entities: [User, Friend, MentorRequest, Chatroom, Chat],
  }),
};
