import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    AllowNull,
    ForeignKey,
    AutoIncrement,
    HasMany,
    HasOne,
    Default,
} from 'sequelize-typescript';

// interfaces
import { IGenericFields } from '../interfaces/genericFields.interface';

// entities
import { FieldsCondition } from './fieldsCondition.entity';
import { FieldValidators } from './fieldsValidators.entity';
import { FieldMultOptions } from './multOptionField.entity';
import { SkipDecisionFunc } from './skipDecisionFunc.entity';
import { FieldTypes } from './types/fieldTypes.entity';

@Table({ tableName: 'GenericFields', updatedAt: false, createdAt: false })
export class GenericFields extends Model<GenericFields> implements IGenericFields {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    id: number;

    @Column({ type: DataType.INTEGER })
    public subType: number

    @Column({ type: DataType.TEXT })
    public technicalName: string

    @Column({ type: DataType.TEXT })
    public title: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public tooltipText: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public placeHolder?: string

    @ForeignKey(() => FieldTypes)
    @Column({ type: DataType.TEXT })
    public fieldType: string

    @AllowNull
    @Column({ type: DataType.TEXT })
    public apiURL: string

    @Default('')
    @Column({ type: DataType.TEXT })
    public fieldValue: string

    @AllowNull
    @Column({ type: DataType.BOOLEAN })
    public isSave: boolean

    @Column({ type: DataType.TEXT })
    public required: string

    @Column({ type: DataType.INTEGER })
    public page: number

    @Column({ type: DataType.INTEGER })
    public rowNumber: number

    @Column({ type: DataType.INTEGER })
    public rowLength: number

    @Column({ type: DataType.INTEGER })
    public priority: number

    @Column({ type: DataType.BOOLEAN })
    public isDisplayDefault: boolean

    @AllowNull
    @Column({ type: DataType.INTEGER })
    public duplicatedId: number

    @Column({ type: DataType.BOOLEAN })
    public validateByValue: boolean

    @HasMany(() => FieldValidators, 'id')
    public validators: FieldValidators[];

    @HasOne(() => SkipDecisionFunc, 'id')
    public skipDecisionFunc: SkipDecisionFunc;

    @HasOne(() => FieldMultOptions, 'id')
    public multOptions: FieldMultOptions;

    @HasMany(() => FieldsCondition, 'id')
    public conditions: FieldsCondition[]
}

