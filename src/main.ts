// App
import { AppModule } from './app.module';

// Interceptors
import { SerializeInterceptor } from './common/interceptors/serialize.interceptor';

// External libraries
import { json } from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import helmet from 'helmet';

import * as session from "express-session";

import * as compression from 'compression';

import * as http from 'http'

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  // Global prefix
  app.setGlobalPrefix('/api');
  app.useGlobalInterceptors(new SerializeInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  const server = http.createServer(app.getHttpAdapter().getInstance());

  server.timeout = 6000

  app.use(json({ limit: '5mb' }));
  app.use(compression());

  app.use(session({
    name: 'sessionId',
    secret: process.env.JWT_ACCESS_SECRET,
    cookie: {
      path: '/',
      secure: true,
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 30)
    }
  }))

  app.use(helmet());

  app.disable('x-powered-by');

  // app.useGlobalPipes(new ValidationPipe({ transform: true, disableErrorMessages: true }));

  await app.listen(process.env.PORT);

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Health check on: ${await app.getUrl()}/health`);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

