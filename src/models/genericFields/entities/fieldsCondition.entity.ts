import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    ForeignKey,
    BelongsTo,
    Unique,
    AutoIncrement,
    HasOne,
    HasMany,
} from 'sequelize-typescript';

// interfaces
import { IFieldsCondition } from '../interfaces/fieldsCondition.interface';

// entites
import { EqualConditionOptions } from './equalConditionOptions.entity';
import { GenericFields } from './genericFields.entity';
import { ConditionTypes } from './types/conditionTypes.entity';

@Table({ tableName: 'FieldsCondition', updatedAt: false, createdAt: false })
export class FieldsCondition extends Model<FieldsCondition> implements IFieldsCondition {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    condId: number;

    @ForeignKey(() => GenericFields)
    @Unique('uniquieCondition')
    @Column({ type: DataType.INTEGER })
    id: number;

    @ForeignKey(() => ConditionTypes)
    @Unique('uniquieCondition')
    @Column({ type: DataType.TEXT })
    public condition: string

    @AllowNull
    @Column({ type: DataType.INTEGER })
    public effectedFieldId: number

    @AllowNull
    @Column({ type: DataType.TEXT })
    public from: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public to: string

    @AllowNull
    @Column({ type: DataType.BOOLEAN })
    public isSelected: boolean

    @BelongsTo(() => GenericFields, 'id')
    public fields: GenericFields;

    @HasMany(() => EqualConditionOptions, 'condId')
    public equalOptions: EqualConditionOptions[]
}
