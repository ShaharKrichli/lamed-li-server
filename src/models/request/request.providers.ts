// Shift
import { Request } from './entities/request.entity';

// Constants
import { REQUEST } from '../../common/constants';

export const RequestProviders = [
  {
    provide: REQUEST,
    useValue: Request,
  },
];
