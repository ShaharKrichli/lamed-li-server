import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

import { IOptionStyle } from '../../interfaces/types/optionStyle.interface';

@Table({ tableName: 'FieldDirectionDisplayType', updatedAt: false, createdAt: false })
export class OptionStyle extends Model<OptionStyle> implements IOptionStyle {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public optionStyle: string;

}
