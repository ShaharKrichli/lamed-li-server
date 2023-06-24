import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
    AllowNull,
    BelongsTo,
} from 'sequelize-typescript';

// interface
import { IEntitle } from '../interfaces/entitle.interface';

// entities
import { Request } from 'src/models/request/entities/request.entity';

@Table({ tableName: 'Entitlements', updatedAt: false, createdAt: false })
export class Entitle extends Model<Entitle> implements IEntitle {
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    public id: number;

    @ForeignKey(() => Request)
    @Column({ type: DataType.INTEGER })
    public reqId: number;

    @Column({ type: DataType.TEXT })
    public title: string;

    @AllowNull
    @Column({ type: DataType.TEXT })
    public desc: string;

    @BelongsTo(() => Request, 'reqId')
    public request: Request;
}
