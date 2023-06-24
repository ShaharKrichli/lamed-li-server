import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    HasMany,
    ForeignKey,
    BelongsTo,
} from 'sequelize-typescript';

// interfaces
import { IMultOptionsField } from '../interfaces/multOptionsField.interface';

// entities
import { FieldDirectionDisplayType } from './types/fieldDirectionDisplayTypes.entity';
import { GenericFields } from './genericFields.entity';
import { SingleOption } from './singleOption.entity';
import { OptionStyle } from './types/optionStyle.entity';

@Table({ tableName: 'FieldMultOptions', updatedAt: false, createdAt: false })
export class FieldMultOptions extends Model<FieldMultOptions> implements IMultOptionsField {
    @PrimaryKey
    @ForeignKey(() => GenericFields)
    @Column({ type: DataType.INTEGER })
    id: number;

    @ForeignKey(() => FieldDirectionDisplayType)
    @Column({ type: DataType.TEXT })
    public directionDisplay: string

    @Column({ type: DataType.BOOLEAN })
    public isMultiPick: boolean

    @Column({ type: DataType.BOOLEAN })
    public isNotScroll: boolean

    @ForeignKey(() => OptionStyle)
    @Column({ type: DataType.TEXT })
    public optionStyle: string

    @BelongsTo(() => GenericFields, 'id')
    public fields: GenericFields;

    @HasMany(() => SingleOption, 'id')
    public options: SingleOption[]
}
