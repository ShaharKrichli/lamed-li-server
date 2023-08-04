import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    AllowNull,
} from 'sequelize-typescript';

// interfaces
import { ICity } from '../interfaces/city.interface';
import { Teacher } from 'src/models/teacher/entities/teacher.entity';

@Table({ tableName: 'Cities', updatedAt: false, createdAt: false })
export class City extends Model<City> implements ICity {

    @PrimaryKey
    @ForeignKey(() => Teacher)
    @Column({ type: DataType.TEXT })
    public id: string;

    @Column({ type: DataType.TEXT })
    public parent_id: string;

    @Column({ type: DataType.TEXT })
    public name: string;

    @Column({ type: DataType.TEXT })
    public description: string;

    @Column({ type: DataType.TEXT })
    public parents: [string];

   
}