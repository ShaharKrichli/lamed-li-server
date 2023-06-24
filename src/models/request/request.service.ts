import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelOmit } from '../orm/model.repository-orm';

//blacklist
import {
  excludeRequests,
  ExcludeRequests,
  ExcludeRequestsButCatId,
  excludeRequestButCatId,
} from './blacklist//request.blacklist';

//repositories
import { RequestRepository } from './request.repository';

//entities
import { Request } from './entities/request.entity';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class RequestService {
  constructor(private readonly requestRepository: RequestRepository) {}

  async findHeaders() {
    const requestHeaders = await this.requestRepository.findheaders();
    if (!requestHeaders)
      throw new NotFoundException({
        message: 'Request headers Not found',
        name: 'requestHeadersNotFound',
      });
    return requestHeaders;
  }

  async findMatch() {
    const requestHeaders = await this.requestRepository.findBy({
      openType: '2',
    });
    if (!requestHeaders)
      throw new NotFoundException({
        message: 'Request headers Not found',
        name: 'matchingRequestHeaderNotFound',
      });
    return requestHeaders;
  }

  async findOne(id: number) {
    if (!id)
      throw new BadRequestException({
        message: 'id was missing.',
        name: 'no id to find request',
      });
    const request = await this.requestRepository.findByPk(id, undefined, {
      all: true,
    });
    if (!request)
      throw new NotFoundException({
        message: 'Request Not found',
        name: 'requestNotFound',
      });
    return request;
  }

  async findOneCatId(reqId: number) {
    if (!reqId)
      throw new BadRequestException({
        message: 'reqId was missing.',
        name: 'noReqIdToFindCategory',
      });
    const matchedCategoryId =
      await this.requestRepository.findByPk<ExcludeRequestsButCatId>(reqId, {
        attributes: { exclude: excludeRequestButCatId },
      });
    if (!matchedCategoryId)
      throw new NotFoundException({
        message: 'No matching cat id',
        name: 'categoryNotFound',
      });
    return matchedCategoryId;
  }

  async findSupported() {
    const supportedRequests =
      await this.requestRepository.findBy<ExcludeRequests>(
        { isSupported: true },
        { attributes: { exclude: excludeRequests } },
      );
    if (!supportedRequests)
      throw new NotFoundException({
        message: 'We dont support any requests now',
        name: 'supportNoRequest',
      });
    return supportedRequests;
  }

  async findExcludeOne(
    id: number,
  ): Promise<ModelOmit<Request, ExcludeRequests>> {
    if (!id)
      throw new BadRequestException({
        message: 'id was missing.',
        name: 'noRequestIdToExclude',
      });
    const request = await this.requestRepository.findByPk<ExcludeRequests>(id, {
      attributes: { exclude: excludeRequests },
    });
    if (!request)
      throw new NotFoundException({
        message: 'Request Not found',
        name: 'requestAfterExcludeNotFound',
      });
    return request;
  }

  async findDocumentsByReqId(id: number) {
    if (!id)
      throw new BadRequestException({
        message: 'id was missing.',
        name: 'noDocumentsIdToFind',
      });
    const request = await this.requestRepository.findDocumentsByReqId(id);
    if (!request)
      throw new NotFoundException({
        message: 'Request Not found',
        name: 'requestForDocumentNotFound',
      });
    return request;
  }
}
