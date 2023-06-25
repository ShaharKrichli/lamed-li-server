import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

// interfaces.
import { IRole } from '../interfaces/IRole';

@Table({ tableName: 'roleTypes', updatedAt: false, createdAt: false })
export class RoleTypes extends Model<RoleTypes> implements IRole {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public role: string;
}
