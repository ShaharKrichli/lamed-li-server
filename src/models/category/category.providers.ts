// Shift
import { Category } from './entities/category.entity';

// Constants
import { CATEGORY, REQUEST } from '../../common/constants';
import { Request } from '../request/entities/request.entity';

export const categoryProviders = [
  {
    provide: CATEGORY,
    useValue: Category,
  },
  {
    provide: REQUEST,
    useValue: Request
  }
];
