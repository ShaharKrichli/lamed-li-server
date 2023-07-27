//this is an example//

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PageTitlesService } from '../pageTitles/pageTitles.service';
// import { GenericFieldsRepository } from './genericFields.repository';

// @Injectable()
// export class GenericFieldsService {

//   constructor(private readonly requestRepository: GenericFieldsRepository,
//     private readonly pageTitlesFieldsService: PageTitlesService) { }

//   async findFieldsByID(subType: number) {

//     const getGenericFields = async () => {
//       return await this.requestRepository.findBy({ subType }, {
//         order: [{ by: 'page', order: 'ASC' },
//         { by: 'rowNumber', order: 'ASC' },
//         { by: 'priority', order: 'ASC' }]
//       }, { all: true, nested: true })
//     }

//     const getPageTitles = async () => {
//       return await this.pageTitlesFieldsService.findPageTitlesByID(subType)
//     }

//     return await Promise.all([getGenericFields(), getPageTitles()]).then(([fields, pageTitles]) => {
//       if (!fields.length) throw new NotFoundException({ message: 'Generic fields not found', name: 'fieldsNotFound' })
//       return { fields, pageTitles }
//     })
//   }
// }





import { Injectable, NotFoundException } from '@nestjs/common';
import { PageTitlesService } from '../pageTitles/pageTitles.service';

@Injectable()
export class TeacherService {

  constructor() { }

  async findByEmail(email: string) {
    
  }
}
