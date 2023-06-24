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
import { IFieldValidators } from '../interfaces/fieldsValidators.interface';

// entites
import { FieldValidatorsTypes } from './types/fieldValidatorsTypes.entity';
import { GenericFields } from './genericFields.entity';

@Table({ tableName: 'FieldValidators', updatedAt: false, createdAt: false })
export class FieldValidators extends Model<FieldValidators> implements IFieldValidators {
    @PrimaryKey
    @ForeignKey(() => GenericFields)
    @Column({ type: DataType.INTEGER })
    id: number;

    @PrimaryKey
    @ForeignKey(() => FieldValidatorsTypes)
    @Column({ type: DataType.TEXT })
    public functionName: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public param1?: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public param2?: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public param3?: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public errorMsg: string

    @BelongsTo(() => GenericFields, 'id')
    public fields: GenericFields;
}
