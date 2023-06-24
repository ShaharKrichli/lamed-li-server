// External Library
import { SetMetadata } from '@nestjs/common';

// consts
import { ROLES_KEY } from '../constants//metadata';
import { Role } from '../constants/roles';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);