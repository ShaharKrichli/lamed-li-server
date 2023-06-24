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

//entities
import { Link } from 'src/models/links/entities/link.entity';
import { ProgressGroup } from 'src/models/progressGroup/entities/progressGroup.entity';

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

    @ForeignKey(() => ProgressGroup)
    @Column({ type: DataType.INTEGER })
    public progressGroup: number

    @AllowNull
    @Column({ type: DataType.INTEGER })
    public singleFieldCounter: number

    @AllowNull
    @ForeignKey(() => Link)
    @Column({ type: DataType.TEXT })
    public link_id: string

    @BelongsTo(() => ProgressGroup, 'progressGroup')
    public group: ProgressGroup;

    @BelongsTo(() => Link, 'link_id')
    public link: Link;

}
