// External Libraries
import { Controller, Get,Post, Req, Param, ParseIntPipe } from '@nestjs/common';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';

// Decorators
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';

// Consts
import { Role } from 'src/common/constants/roles';

// interfaces
import { ICity } from './interfaces/city.interface';

//services
// import { TeacherService } from './teachers.service';



@Controller('cities')
export class CitiesController {
    constructor(private readonly cityService: CityService) { }

 
    @Public()
    @Get('/get-city:id')
    async getCityById(@Param('id') id: string): Promise<ICity> {
        return await this.cityService.getCityById(id);
    }
  
    @Roles(Role.ADMIN)
    @Post('/add-city/:city')
    async createCity(@Param() city: ICity): Promise<ICity> {
        return await this.cityService.createCity(city);
    }
}