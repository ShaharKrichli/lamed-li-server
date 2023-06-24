// Shift
import { GenericFields } from './entities/genericFields.entity';

// Constants
import { FIELDS, PAGE_TITLES } from '../../common/constants/providers';
import { PageTitles } from '../pageTitles/entities/pageTitles.entity';

export const genericFieldsProviders = [
    {
        provide: FIELDS,
        useValue: GenericFields,
    },
    {
        provide: PAGE_TITLES,
        useValue: PageTitles
    }
];
