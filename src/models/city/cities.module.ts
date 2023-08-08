import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from './entities/city.entity'; // Import your City entity
import { CityRepository } from './cities.repository'; // Import your CityRepository
import { CitiesController } from './cities.controller'; // Import your CityController
import { CityService } from './cities.service'; // Import your CityService

@Module({
  imports: [SequelizeModule.forFeature([City])], // Import the City entity into SequelizeModule
  controllers: [CitiesController], // Include your controller
  providers: [CityRepository, CityService], // Include your repository and service
  exports: [CityRepository], // Export the repository for injection in other modules
})
export class CitiesModule {}
