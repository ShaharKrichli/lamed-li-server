import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
} from 'sequelize-typescript';

// interfaces
import { IRestorationCode } from '../interfaces/IRestorationCode';

// entities
import { User } from './user.entity';

@Table({ tableName: 'Tokens', updatedAt: false })
export class Tokens extends Model<Tokens> implements IRestorationCode {
    @PrimaryKey
    @ForeignKey(() => User)
    @Column({ type: DataType.TEXT })
    public email: string;

    @Column({ type: DataType.TEXT })
    public token: string;
}
