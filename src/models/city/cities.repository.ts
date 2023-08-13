// Constraint
import { City } from './entities/city.entity';

// External libraries
import { Injectable, Inject, NotFoundException } from '@nestjs/common';

// Repository
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';
import { InjectModel } from '@nestjs/sequelize';
import { ICity } from './interfaces/city.interface';

@Injectable()
export class CitiesRepository extends BaseRepositoryORM<City> {
  constructor(
    @Inject(City)
    private cityModel: ModelType<City>,
  ) {
    super(cityModel);
  }

  async getCityById(id: string): Promise<City> {
    const city:any = await this.cityModel.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with id ${id} not found`);
    }
    return city;
  }

  async createCity(cityData: ICity): Promise<City> {
    const newCity:any = await this.cityModel.create(cityData);
    return newCity;
  }
}
