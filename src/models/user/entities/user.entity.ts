import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
} from 'sequelize-typescript';

// interfaces
import { IUser } from '../interfaces/IUser';

// entities
import { RoleTypes } from './roleTypes.entity';

@Table({ tableName: 'Users', updatedAt: false, createdAt: false })
export class User extends Model<User> implements IUser {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public email: string;

    @Column({ type: DataType.TEXT })
    public password: string

    @Column({ type: DataType.TEXT })
    public name: string

    @ForeignKey(() => RoleTypes)
    @Column({ type: DataType.TEXT })
    public role: string
}
