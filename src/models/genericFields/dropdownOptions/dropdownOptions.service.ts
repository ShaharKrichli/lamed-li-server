import { Injectable, NotFoundException } from '@nestjs/common';
import { DropdownOptionsRepository } from './dropdownOptions.repository';
import { DropdownOptions } from './entities/dropdownOptions.entity';

@Injectable()
export class DropdownOptionsService {

  constructor(private readonly DropdownOptionsRepository: DropdownOptionsRepository) { }

  async getOptionsByText(id: number, text: string): Promise<DropdownOptions[]> {
    const dropdownOptions = await this.DropdownOptionsRepository.findBy({id, value: {like: `${text}%`}})
    if (!dropdownOptions) throw new NotFoundException({ message: 'dropdownOptions not found by text', name: 'dropdownOptionsNotFoundByText'})
    return dropdownOptions;
  }

  async getFieldOptionsByCode(id: number, code: string): Promise<DropdownOptions> {
    const dropdownOption = await this.DropdownOptionsRepository.findFieldOptionByCode(id, code)
    if (!dropdownOption) throw new NotFoundException({ message: 'dropdownOptions not found by code', name: 'dropdownOptionsNotFoundByCode'})
    return dropdownOption;
  }
}
