// External Libraries
import { Controller, Get,Post, Req, Param, ParseIntPipe, Body } from '@nestjs/common';
import { BodyDecoder } from 'src/common/decorators/bodyDecoder';

// Decorators
import { Public } from '../../common/decorators/public.decorator';
import { Roles } from 'src/common/decorators/roles.decorator';

// Consts
import { Role } from 'src/common/constants/roles';

// interfaces
import { ICity } from './interfaces/city.interface';
import { CityService } from './cities.service';

//services
// import { TeacherService } from './teachers.service';



@Controller('cities')
export class CitiesController {
    constructor(private readonly cityService: CityService) { }

 
    @Public()
    @Get(':id')
    async getCityById(@Param('id') id: string): Promise<ICity> {
        return await this.cityService.getCityById(id);
    }
  
    @Roles(Role.ADMIN)
    @Post('/')
    async createCity(@Body() city: ICity): Promise<ICity> {
        return await this.cityService.createCity(city);
    }
}


// @Post('/forgot-password')
//   async forgotPassword(@BodyDecoder() body: IEmail) {
//     return await this.authenticationService.forgotPassword(body.email.toLowerCase());
//   }