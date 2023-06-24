import { ResponseUser } from './user.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  getPratimsByTzs,
  getPratimsByIds,
} from 'src/utilities/cookieUtils/cookieRequests';
import { trackEvent } from 'src/utilities/logs';

@Injectable()
export class UserService {
  async getUsersDetailsByTz(tzs: { tzs: string[] }): Promise<ResponseUser[]> {
    try {
      const { data } = tzs && (await getPratimsByTzs(tzs));
      const requestedFields = {
        first_name: data[0].first_name,
        last_name: data[0].last_name,
        _id: data[0]._id,
        tz: data[0].tz,
        status: data[0].status,
        tashBenefits: data[0].tashBenefits,
        tashRequests: data[0].tashRequests,
        service_type: data[0].service_type,
        end_hova_service: data[0].end_hova_service,
        number_of_children: data[0].number_of_children,
        tashStatus: data[0].tashStatus,
      };
      return [requestedFields];
    } catch (error) {
      trackEvent('CookieError', { cookieError: 'Cookie data retrieve failed' });
      throw new InternalServerErrorException({
        message: `Cookie data retrieve failed for user ${tzs[0]}, Cookie error msg is: ${error.message}`,
        name: 'FailedAtCookieDataClient',
      });
    }
  }


  async getUsersDetailsByTzForServer(tzs: { tzs: string[] }): Promise<ResponseUser[]> {
    try {
      const { data } = tzs && (await getPratimsByTzs(tzs));
      const requestedFields = {
        first_name: data[0].first_name,
        last_name: data[0].last_name,
        _id: data[0]._id,
        tz: data[0].tz,
        status: data[0].status,
        tashBenefits: data[0].tashBenefits,
        tashRequests: data[0].tashRequests,
        service_type: data[0].service_type,
        end_hova_service: data[0].end_hova_service,
        number_of_children: data[0].number_of_children,
        tashStatus: data[0].tashStatus,
      };
      return [requestedFields];
    } catch (error) {
      trackEvent('CookieError', { cookieError: 'Cookie data retrieve failed ' });
      throw new InternalServerErrorException({
        message: `Cookie data retrieve failed from server for user ${tzs[0]}, Cookie error msg is: ${error.message}`,
        name: 'FailedAtCookieDataServer',
      });
    }
  }
}
