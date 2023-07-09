// App
import { AppController } from './app.controller';

// External libraries
import { Module, } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HealthModule } from './health';


//modules
import { GenericFieldsModule } from './models/genericFields/genericFields.module';
import { PageTitlesModule } from './models/pageTitles/pageTitles.module';
import { AuthenticationModule } from './models/auth/auth.module';
import { DropdownOptionsModule } from './models/genericFields/dropdownOptions/dropdownOptions.module';
import { DatabaseModule } from './postgres/provider.module';
import { ConfigModule } from '@nestjs/config';

// guards
import { JwtAuthGuard } from './common/guards/jwt.guard';
import { RolesGuard } from './common/guards/roles.guard';

// strategies
import { JwtStrategy } from './common/strategies/jwt.strategy';
import { RefreshTokenStrategy } from './common/strategies/refreshToken.strategy';

// filters
import { CustomExceptionFilter } from './common/exception/custom-exception';

@Module({
  imports: [
    AuthenticationModule,
    HealthModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GenericFieldsModule,
    DropdownOptionsModule,
    PageTitlesModule,
  ],
  controllers: [AppController],
  providers: [
    RefreshTokenStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    // {
    //   provide: APP_FILTER,
    //   useClass: CustomExceptionFilter
    // },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})

export class AppModule {}