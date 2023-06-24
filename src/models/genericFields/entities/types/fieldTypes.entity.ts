import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

import { IFieldTypes } from '../../interfaces/types/fieldTypes.interface';

@Table({ tableName: 'FieldTypes', updatedAt: false, createdAt: false })
export class FieldTypes extends Model<FieldTypes> implements IFieldTypes {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public fieldType: string

}
