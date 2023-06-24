// Shift
import { PAGE_TITLES } from 'src/common/constants';
import { PageTitles } from './entities/pageTitles.entity';

export const PageTitlesProviders = [
    {
        provide: PAGE_TITLES,
        useValue: PageTitles,
    },
];
