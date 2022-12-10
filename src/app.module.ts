import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { POSTGRESQL_CONFIG } from './common/configs/postgresql.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(POSTGRESQL_CONFIG),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
