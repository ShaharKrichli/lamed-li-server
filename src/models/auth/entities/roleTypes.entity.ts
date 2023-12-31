import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

// interfaces.
import { IRole } from '../interfaces/IRole';
import { ROLE_LITERALS } from 'src/common/constants/roles';

@Table({ tableName: 'RoleTypes', updatedAt: false, createdAt: false })
export class RoleTypes extends Model<RoleTypes> implements IRole {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public role: ROLE_LITERALS;
}
