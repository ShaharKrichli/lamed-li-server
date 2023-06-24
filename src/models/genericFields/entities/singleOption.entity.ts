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
import { ISingleOption } from '../interfaces/singleOption.interface';

// entites
import { FieldMultOptions } from './multOptionField.entity';

@Table({ tableName: 'SingleOption', updatedAt: false, createdAt: false })
export class SingleOption extends Model<SingleOption> implements ISingleOption {
    @PrimaryKey
    @ForeignKey(() => FieldMultOptions)
    @Column({ type: DataType.INTEGER })
    id: number;

    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public option: string

    @Column({ type: DataType.TEXT })
    public optionCode: string

    @Column({ type: DataType.BOOLEAN })
    public isClearOptions: boolean

    @BelongsTo(() => FieldMultOptions, 'id')
    public optionDesc: FieldMultOptions
}
