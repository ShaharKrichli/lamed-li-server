import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    AllowNull,
} from 'sequelize-typescript';

// interfaces
import { IUser } from '../interfaces/IUser';

// entities
import { RoleTypes } from './roleTypes.entity';

// literals
import { ROLE_LITERALS } from 'src/common/constants/roles';

@Table({ tableName: 'Users', updatedAt: false, createdAt: false })
export class User extends Model<User> implements IUser {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public email: string;

    @Column({ type: DataType.TEXT })
    public password: string

    @Column({ type: DataType.TEXT })
    public name: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public refreshToken: string

    @ForeignKey(() => RoleTypes)
    @Column({ type: DataType.TEXT })
    public role: ROLE_LITERALS
}
