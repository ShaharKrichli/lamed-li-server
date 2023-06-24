import {
  Table,
  Model,
  Column,
  DataType,
  PrimaryKey,
  ForeignKey,
  Default,
  AllowNull,
  HasMany,
  BelongsTo,
  BelongsToMany
} from 'sequelize-typescript';

// interface
import { IRequest } from '../interfaces/request.interface';

// entities
import { Category } from '../../category/entities/category.entity';
import { Entitle } from './entitle.entity';
import { ReqDocs } from '../../document/entities/reqDocs.entity';
import { ReqToDoc } from './reqToDoc.entity';
import { OpenTypeStatus } from './openTypeStatus';

@Table({ tableName: 'Requests', updatedAt: false, createdAt: false })
export class Request extends Model<Request> implements IRequest {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  public id: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  public catId: number;

  @Column({ type: DataType.TEXT })
  public name: string;

  @Column({ type: DataType.TEXT })
  public desc: string;

  @Column({ type: DataType.TEXT })
  public steps: string;

  @Column({ type: DataType.INTEGER })
  public applyId: number;

  @AllowNull
  @Column({ type: DataType.TEXT })
  public entitleDesc: string;

  @AllowNull
  @Default(false)
  @Column({ type: DataType.BOOLEAN })
  public parentInd: boolean;

  @Column({ type: DataType.BOOLEAN })
  public isSupported: boolean;

  @Column({ type: DataType.BOOLEAN })
  public isDisplayAsRight: boolean;

  @Column({ type: DataType.BOOLEAN })
  public isSupportedUnderCategory: boolean;

  @ForeignKey(() => OpenTypeStatus)
  @Column({ type: DataType.TEXT })
  public openType: string;

  @Column({ type: DataType.BOOLEAN })
  public isCommingSoon: boolean;

  @BelongsTo(() => Category, 'catId')
  public category: Category;

  @HasMany(() => Entitle, 'reqId')
  public entitlements: Entitle[];

  @BelongsToMany(() => ReqDocs, () => ReqToDoc)
  public documents: ReqDocs[];

  @BelongsTo(() => OpenTypeStatus, 'openType')
  public openTypeStatus: OpenTypeStatus;
}
