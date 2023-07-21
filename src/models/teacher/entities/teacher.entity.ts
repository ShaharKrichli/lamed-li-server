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
import { ITeacher } from '../interfaces/teacher.interface';
import { User } from 'src/models/auth/entities/user.entity';

@Table({ tableName: 'Teachers', updatedAt: false, createdAt: false })
export class Teacher extends Model<Teacher> implements ITeacher {

    @PrimaryKey
    @ForeignKey(() => User)
    @Column({ type: DataType.TEXT })
    public email: string;

    @Column({ type: DataType.TEXT })
    public gender: string

    @Column({ type: DataType.DATEONLY })
    public dateOfBirth: Date

    @Column({ type: DataType.TEXT })
    public firstName: string

    @Column({ type: DataType.TEXT })
    public lastName: string

    @Column({ type: DataType.TEXT })
    public phone: string

    @Column({ type: DataType.TEXT })
    public address: string

    @Column({ type: DataType.TEXT })
    public city: string

    @Column({ type: DataType.TEXT })
    public shortDescription: string

    @Column({ type: DataType.TEXT })
    public description: string

    @Column({ type: DataType.TEXT })
    public institution: string

    @Column({ type: DataType.BOOLEAN })
    public isOnline: boolean

    @Column({ type: DataType.BOOLEAN })
    public isFrontal: boolean

    @Column({ type: DataType.BOOLEAN })
    public isFrontalStudnetHouse: boolean

    @Column({ type: DataType.INTEGER })
    public priceOnline: number

    @Column({ type: DataType.INTEGER })
    public priceFrontal: number

    @Column({ type: DataType.INTEGER })
    public priceFrontalStudentHouse: number
}
