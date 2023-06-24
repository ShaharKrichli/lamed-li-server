
// Constants
import { ANALYTICS } from '../../common/constants';
import { Analytics } from '../analytics/entites/analytics.entity';

export const authProviders = [
  {
    provide: ANALYTICS,
    useValue: Analytics,
  },
];
