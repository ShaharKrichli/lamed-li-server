import { Injectable, NotFoundException } from '@nestjs/common';
import { PageTitlesRepository } from './pageTitles.repository';

@Injectable()
export class PageTitlesService {

  constructor(private readonly requestRepository: PageTitlesRepository) { }

  async findPageTitlesByID(id: number) {
    const pageTitles = await this.requestRepository.findBy({ id }, {
      order: [{ by: 'pageNumber', order: 'ASC' },]
    }, { all: true });
    if (!pageTitles) throw new NotFoundException({ message: 'Page titles not found', name: 'pageTitlesNotFound' })
    return pageTitles
  }
}
