import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { POSTGRESQL_CONFIG } from './common/configs/postgresql.config';
import { WINSTON_CONFIG } from './common/configs/winston.config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ChatModule } from './chat/chat.module';
import { UserModule } from './user/user.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { PermissionModule } from './permission/permission.module';
import { FriendModule } from './friend/friend.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(POSTGRESQL_CONFIG),
    WinstonModule.forRootAsync(WINSTON_CONFIG),
    ChatModule,
    UserModule,
    ChatroomModule,
    PermissionModule,
    FriendModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
