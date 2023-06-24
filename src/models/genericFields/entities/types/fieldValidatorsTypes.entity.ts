import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
} from 'sequelize-typescript';

import { IFieldValidatorsTypes } from '../../interfaces/types/fieldValidatorsTypes.interface';

@Table({ tableName: 'FieldValidatorsTypes', updatedAt: false, createdAt: false })
export class FieldValidatorsTypes extends Model<FieldValidatorsTypes> implements IFieldValidatorsTypes {
    @PrimaryKey
    @Column({ type: DataType.TEXT })
    public functionName: string;

}
