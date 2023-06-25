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

@Table({ tableName: 'RestorationCodes', updatedAt: false })
export class RestorationCodes extends Model<RestorationCodes> implements IRestorationCode {
    @PrimaryKey
    @ForeignKey(() => User)
    @Column({ type: DataType.TEXT })
    public email: string;

    @Column({ type: DataType.TEXT })
    public code: string;
}
