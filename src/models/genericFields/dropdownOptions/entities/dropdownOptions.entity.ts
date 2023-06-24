import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';

import { IDropdownOptions } from '../interfaces/dropdownOptions.interface';
import { GenericFields } from '../../entities/genericFields.entity';

@Table({ tableName: 'DropdownOptions', updatedAt: false, createdAt: false })
export class DropdownOptions extends Model<DropdownOptions> implements IDropdownOptions {
    @PrimaryKey
    @ForeignKey(() => GenericFields)
    @Column({ type: DataType.INTEGER })
    id: number;

    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public code: string

    @Column({ type: DataType.TEXT })
    public value: string

}
