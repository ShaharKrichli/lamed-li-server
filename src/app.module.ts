// health
import { HealthModule } from './health';

// Config
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';

// App
import { AppController } from './app.controller';

// External libraries
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

//middlewares
import { passportMiddleWare, tokenExperationMiddleware } from './middleware/passport/passportMiddleware';

//modules
import { CategoryModule } from './models/category/category.module';
import { RequestModule } from './models/request/request.module';

import { GenericFieldsModule } from './models/genericFields/genericFields.module';
import { PageTitlesModule } from './models/pageTitles/pageTitles.module';
import { UserModule } from './models/user/user.module';

import { AuthenticationModule } from './models/auth/auth.module';
import { DropdownOptionsModule } from './models/genericFields/dropdownOptions/dropdownOptions.module';


// guards
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';
import { RolesGuard } from './common/guards/roles.guard';
import { JwtStrategy } from './common/strategies/jwt.strategy';
import { CustomExceptionFilter } from './common/exception/custom-exception';
import { DatabaseModule } from './postgres/provider.module';

@Module({
  imports: [
    AuthenticationModule,
    HealthModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CategoryModule,
    RequestModule,
    GenericFieldsModule,
    DropdownOptionsModule,
    PageTitlesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(tokenExperationMiddleware, passportMiddleWare).forRoutes("/login/auth");
  }
}