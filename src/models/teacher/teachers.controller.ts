import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

//services
import { TeacherService } from './teachers.service';

//commons
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/constants/roles';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teacherService: TeacherService) { }

    // Think about security roles.
    @Public()
    @Get('/email/:email')
    findFieldsByIT(@Param("email", new ParseIntPipe()) email: string) {
        return this.teacherService.findByEmail(email);
    }
}
