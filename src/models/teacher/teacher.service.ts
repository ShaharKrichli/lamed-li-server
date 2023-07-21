import { Injectable, NotFoundException } from '@nestjs/common';
import { PageTitlesService } from '../pageTitles/pageTitles.service';

@Injectable()
export class TeacherService {

  constructor() { }

  async findByEmail(email: string) {
    
  }
}
