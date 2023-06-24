import { Module } from '@nestjs/common';
import { DropdownOptionsService } from './dropdownOptions.service';
import { DropdownOptionsController } from './dropdownOptions.controller';
import { DropdownOptionsRepository } from './dropdownOptions.repository';
import { dropdownOptionsProviders } from './dropdownOptions.providers';

@Module({
  controllers: [DropdownOptionsController],
  providers: [DropdownOptionsRepository, DropdownOptionsService, ...dropdownOptionsProviders]
})
export class DropdownOptionsModule { }
