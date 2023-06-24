import {
  Table,
  Model,
  Column,
  HasMany,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

import { ICategory } from '../interfaces/category.interface';
import { Request } from 'src/models/request/entities/request.entity';

@Table({ tableName: 'Categories', updatedAt: false, createdAt: false })
export class Category extends Model<Category> implements ICategory {
  @PrimaryKey
  @Column({ type: DataType.INTEGER })
  public id: number;

  @Column({ type: DataType.TEXT })
  public name: string;

  @Column({ type: DataType.TEXT })
  public icon: string;

  @Column({ type: DataType.BOOLEAN })
  public isSupported: boolean;

  @HasMany(() => Request, 'catId')
  public requests: Request[];
}
