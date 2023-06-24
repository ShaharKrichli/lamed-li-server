import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    HasOne
} from 'sequelize-typescript';

// interface
import { ICode } from '../../../common/interfaces/code.interface';

@Table({ tableName: 'OpenTypeStatus', updatedAt: false, createdAt: false })
export class OpenTypeStatus extends Model<OpenTypeStatus> implements ICode {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public id: string;

    @Column({ type: DataType.TEXT })
    public value: string;
}
