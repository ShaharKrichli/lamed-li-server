// import { Injectable } from '@nestjs/common';
// import { City } from './entities/city.entity'; // Import your City entity
// import { ICity } from './interfaces/city.interface'; // Import your ICity interface
// import { Sequelize } from 'sequelize-typescript'; // Import Sequelize

// @Injectable()
// export class CityRepository {
//   private cityModel: typeof City;

//   constructor(private sequelize: Sequelize) {
//     this.cityModel = this.sequelize.model(City) as typeof City;
//   }

//   async createCity(cityData: ICity): Promise<City> {
//     const newCity = await this.cityModel.create(cityData);
//     return newCity;
//   }
// }

// Constraint
import { City } from './entities/city.entity';

// External libraries
import { Injectable, Inject } from '@nestjs/common';

// Constants
import { FIELDS } from '../../common/constants/providers';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';

@Injectable()
export class CitiesRepository extends BaseRepositoryORM<City> {
    constructor(@Inject(FIELDS) citiesModel: ModelType<City>) {
        super(citiesModel);
    }
}

