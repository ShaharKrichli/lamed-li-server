import {
    Table,
    Model,
    Column,
    DataType,
    PrimaryKey,
    BelongsTo,
    ForeignKey,
    AllowNull,
} from 'sequelize-typescript';


// interfaces
import { IPageTitles } from '../interfaces/pageTitles.interface';

@Table({ tableName: 'PageTitles', updatedAt: false, createdAt: false })
export class PageTitles extends Model<PageTitles> implements IPageTitles {
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    id: number;

    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    public pageNumber: number

    @Column({ type: DataType.TEXT })
    public mainTitle: string

    @Column({ type: DataType.TEXT })
    public secondaryTitle: string

    @AllowNull
    @Column({ type: DataType.INTEGER })
    public singleFieldCounter: number
}
