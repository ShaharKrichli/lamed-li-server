import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

import { IConditionTyoes } from '../../interfaces/types/conditionTypes.interface';

@Table({ tableName: 'ConditionTypes', updatedAt: false, createdAt: false })
export class ConditionTypes extends Model<ConditionTypes> implements IConditionTyoes {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public condition: string;

}
