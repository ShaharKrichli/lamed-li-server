import { Module } from "@nestjs/common";

// Provider
import { azureStrategyProviders } from "./provider.providers";

@Module({
	providers: [...azureStrategyProviders],
	exports: [...azureStrategyProviders],
})
export class AzureStrategyProvidersModule {}
