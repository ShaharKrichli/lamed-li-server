// Serializers
import {
  serializerFindOptions,
  serializerWhereOptions,
  serializerRelationOptions,
} from '../../common/serializers/orm.serializer';

// Interfaces
import {
  FindOptions,
  RelationOptions,
  WhereOptions,
  Keys,
} from '../../common/interfaces/orm.interface';

// External libraries
import { Model } from 'sequelize-typescript';
import { UpdateOptions, CreateOptions, DestroyOptions, FindOrCreateOptions } from "sequelize";

// Type `ModelType` would basically wrap & satisfy the 'this' context of any sequelize helper methods
export type ModelType<T extends Model<T>> = Constructor<T> & typeof Model;
export type ModelOmit<T extends Model<T>, K extends Keys<T>[number]> = Omit<
  T,
  K
>;

export abstract class BaseRepositoryORM<T extends Model<T>> {
  constructor(protected module: ModelType<T>) { }

  public async all<
    K extends Keys<T>[number] = undefined,
    R extends Model<R> = Model,
    >(
      where?: WhereOptions<T>,
      relation?: RelationOptions<R>,
  ): Promise<ModelOmit<T, K>[]> {
    return await this.module.findAll<T>({
      where: where && serializerWhereOptions<T>(where),
      include: relation && serializerRelationOptions<R>(relation),
    });
  }

  public async findBy<K extends Keys<T>[number] = undefined, R extends Model<R> = Model>(
    where: WhereOptions<T>,
    options: FindOptions<T> = {},
    relation?: RelationOptions<R>
  ): Promise<ModelOmit<T, K>[]> {
    return await this.module.findAll<T>({
      ...serializerFindOptions(options),
      where: serializerWhereOptions<T>(where),
      include: relation && serializerRelationOptions<R>(relation)
    });
  }

  public async findByPk<
    K extends Keys<T>[number] = undefined,
    R extends Model<R> = Model,
    >(
      id: number | string,
      options: FindOptions<T> = {},
      relation?: RelationOptions<R>,
  ): Promise<ModelOmit<T, K>> {
    return await this.module.findByPk<T>(id, {
      ...serializerFindOptions(options),
      include: relation && serializerRelationOptions<R>(relation),
    });
  }

  public async count(where?: WhereOptions<T>): Promise<number> {
    return await this.module.count({ where: serializerWhereOptions<T>(where) });
  }

  public async create<DTO>(attributes: DTO, options: CreateOptions = {}): Promise<T & Model<T>> {
    return await this.module.create<T>(attributes as any, options);
  }

  public async update(
    id: any,
    attributes: Partial<T>,
    { where, ...options }: UpdateOptions<T> = { where: {} }
  ) {
    const [, modules] = await this.module.update<T>(attributes, {
      ...options,
      returning: true,
      where: { id, ...where }
    });
    return modules;
  }

  public async updateBy(
    searchAttributes: WhereOptions<T>,
    attributes: Partial<T>,
    options: Omit<UpdateOptions<T>, "where"> = {}
  ): Promise<(T & Model<T>)[]> {
    const [, modules] = await this.module.update<T>(attributes, {
      ...options,
      returning: true,
      where: serializerWhereOptions<T>(searchAttributes)
    });

    return modules;
  }

  public async destroy(id: any, options: DestroyOptions<T> = {}): Promise<void> {
    await this.module.destroy<T>({
      ...options,
      where: { id }
    });
  }

  public async destroyAll(): Promise<void> {
    await this.module.destroy({
      where: {}
    });
  }

  public async findOrCreateBy<DTO>(attributes: DTO, options: FindOrCreateOptions<T> = {}) {
    return await this.module.findOrCreate<T>({
      ...options,
      defaults: attributes as any
    });
  }

  public async exists(where: WhereOptions<T>): Promise<boolean> {
    const count = await this.module.count({ where: serializerWhereOptions<T>(where) });

    return count !== 0;
  }

  public async updateAll(
    where: WhereOptions<T>,
    attributes: Partial<T>,
    options: object = {}
  ): Promise<number> {
    const [count] = await this.module.update(attributes, {
      ...options,
      returning: true,
      where: serializerWhereOptions<T>(where)
    });

    return count;
  }
}