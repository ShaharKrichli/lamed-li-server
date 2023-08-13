import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ICity } from './interfaces/city.interface';
import { CitiesRepository } from './cities.repository';

@Injectable()
export class CityService {
  constructor(
    @Inject(CitiesRepository)
    private citiesRepository: CitiesRepository,
  ) {}

  async getCityById(id: string): Promise<ICity> {
    return await this.citiesRepository.getCityById(id);
  }

  async createCity(cityData: ICity): Promise<ICity> {
   return await this.citiesRepository.createCity(cityData)
  }
}























// // External Libraries
// import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';

// // repos
// import { CityRepository } from './cities.repository';

// // dto
// // import { AuthDto } from './dto/auth.dto';

// // interface
// import { ICity } from './interfaces/city.interface';


// @Injectable()

// export class CityService {
//     constructor(
//         private readonly cityRepository: CityRepository,
//     ) { }


//   async getCityById(id: string): Promise<ICity | undefined> {
//     const city = await this.cityRepository.findByPk(id);
//     if (!city) throw new NotFoundException ('no city found')
//     return city;
//   }

//   async createCity(cityData: ICity): Promise<ICity> {
//     const newCity = await this.cityRepository.create(cityData);
//     return newCity;
// }
// }
