// Decorators
import { Public } from '../common/decorators/public.decorator';

// External libraries
import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Public()
@Controller('/')
export class HealthController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  healthCheck() {
    return this.health.check([]);
  }

}
