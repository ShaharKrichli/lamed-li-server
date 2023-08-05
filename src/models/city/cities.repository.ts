import { Inject, Injectable } from '@nestjs/common';
import { ICity } from './interfaces/city.interface';
import { City } from './entities/city.entity';
import { BaseRepositoryORM, ModelType } from '../orm/model.repository-orm';


@Injectable()
export class CityRepository extends BaseRepositoryORM<City> {
    constructor(@Inject(City) cityModel: ModelType<City>) {
        super(cityModel);
    }

    async findByPk(id: string): Promise<City | null> {
        const city = await this.findByPk(id);
        return city;
    }


    // ask shachar what is the problem here: ??
    async create(cityData: ICity): Promise<City> {
        const newCity = await this.cityModel.create(cityData);
        return newCity;
    }
}
