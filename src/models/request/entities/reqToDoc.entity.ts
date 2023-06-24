import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    ForeignKey,
} from 'sequelize-typescript';

// interface
import { IReqToDoc } from '../interfaces/reqToDoc.interface';

// entities
import { Request } from 'src/models/request/entities/request.entity';
import { ReqDocs } from '../../document/entities/reqDocs.entity';

@Table({ tableName: 'ReqToDoc', updatedAt: false, createdAt: false })
export class ReqToDoc extends Model<ReqToDoc> implements IReqToDoc {
    @PrimaryKey
    @ForeignKey(() => Request)
    @Column({ type: DataType.INTEGER })
    public reqId: number;

    @PrimaryKey
    @ForeignKey(() => ReqDocs)
    @Column({ type: DataType.TEXT })
    public docId: string;


}
