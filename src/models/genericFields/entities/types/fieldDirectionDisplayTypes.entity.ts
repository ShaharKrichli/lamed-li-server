import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

import { IFieldDirectionDisplayType } from '../../interfaces/types/fieldDirectionDisplayTypes.interface';

@Table({ tableName: 'FieldDirectionDisplayType', updatedAt: false, createdAt: false })
export class FieldDirectionDisplayType extends Model<FieldDirectionDisplayType> implements IFieldDirectionDisplayType {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public direction: string;

}
