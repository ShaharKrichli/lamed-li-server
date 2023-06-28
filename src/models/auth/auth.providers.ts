// entites
import { User } from './entities/user.entity';
import { RoleTypes } from './entities/roleTypes.entity';
import { Tokens } from './entities/token.entity';

export const authProviders = [
    {
        provide: User,
        useValue: User,
    },
    {
        provide: RoleTypes,
        useValue: RoleTypes
    },
    {
        provide: Tokens,
        useValue: Tokens
    }
];
