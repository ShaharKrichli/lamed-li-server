import { Injectable } from '@nestjs/common';
import { City } from './entities/city.entity'; // Import your City entity
import { ICity } from './interfaces/city.interface'; // Import your ICity interface
import { Sequelize } from 'sequelize-typescript'; // Import Sequelize

@Injectable()
export class CityRepository {
  private cityModel: typeof City;

  constructor(private sequelize: Sequelize) {
    this.cityModel = this.sequelize.model(City) as typeof City;
  }

  async createCity(cityData: ICity): Promise<City> {
    const newCity = await this.cityModel.create(cityData);
    return newCity;
  }
}

// import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';


// @Injectable()
// export class CityRepository extends BaseRepositoryORM<City> {
//     constructor(@Inject(City) cityModel: ModelType<City>) {
//         super(cityModel);
//     }

//     async findByPk(id: string): Promise<City | null> {
//         const city = await this.findByPk(id);
//         return city;
//     }


//     // ask shachar what is the problem here: ??
//     async create(cityData: ICity): Promise<City> {
//         const newCity = await this.cityModel.create(cityData);
//         return newCity;
//     }
// }
