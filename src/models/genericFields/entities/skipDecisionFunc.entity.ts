import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

// interfaces
import { ISkipDecisionFunc } from '../interfaces/skipDecisionFunc.interface'; 

// entites
import { GenericFields } from './genericFields.entity';

@Table({ tableName: 'SkipDecisionFunc', updatedAt: false, createdAt: false })
export class SkipDecisionFunc extends Model<SkipDecisionFunc> implements ISkipDecisionFunc {
    @PrimaryKey
    @ForeignKey(() => GenericFields)
    @Column({ type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.TEXT })
    public functionName: string

    @BelongsTo(() => GenericFields, 'id')
    public fields: GenericFields;
}
