import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { VALIDATION_OPTIONS } from './common/configs/validation.config';
import { WsAdapter } from './common/adapter/ws-adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const logger: Logger = new Logger();
  const configService = app.get(ConfigService);
  const SERVER_PORT: number = configService.get<number>('SERVER_PORT');

  app.enableCors();

  app.useWebSocketAdapter(new WsAdapter(app));

  /* Validation Pipe */
  app.useGlobalPipes(new ValidationPipe(VALIDATION_OPTIONS));

  /* Error Filter */
  // app.useGlobalFilters(...errorFilters(logger));

  await app.listen(SERVER_PORT);
  logger.log(`Start Run: ${SERVER_PORT}`);
}
bootstrap();
