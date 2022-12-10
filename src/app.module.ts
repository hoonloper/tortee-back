import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { POSTGRESQL_CONFIG } from './common/configs/postgresql.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(POSTGRESQL_CONFIG),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
