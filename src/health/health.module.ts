// External libraries
import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

// Health
import { HealthController } from "./health.controller";

@Module({
  imports: [TerminusModule],
  controllers: [HealthController]
})
export class HealthModule {}
