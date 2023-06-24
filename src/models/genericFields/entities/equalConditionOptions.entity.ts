import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

// interfaces
import { IEqualConditionOptions } from '../interfaces/equalConditionOptions.interface';

// entites
import { FieldsCondition } from './fieldsCondition.entity';

@Table({ tableName: 'EqualConditionOptions', updatedAt: false, createdAt: false })
export class EqualConditionOptions extends Model<EqualConditionOptions> implements IEqualConditionOptions {
    @PrimaryKey
    @ForeignKey(() => FieldsCondition)
    @Column({ type: DataType.INTEGER })
    condId: number;

    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public option: string

    @BelongsTo(() => FieldsCondition, 'condId')
    public condition: FieldsCondition
}
