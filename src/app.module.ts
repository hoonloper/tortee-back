import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { POSTGRESQL_CONFIG } from './common/configs/postgresql.config';
import { WINSTON_CONFIG } from './common/configs/winston.config';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(POSTGRESQL_CONFIG),
    WinstonModule.forRootAsync(WINSTON_CONFIG),
  ],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
