// Other
import { Other } from '../src/models/orm/model.other-entity';
import { IUser } from 'src/common/interfaces/requestUser.interface';

declare global {
  // From https://stackoverflow.com/a/50375286
  type UnionToIntersection<U> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;
  // From: https://stackoverflow.com/a/53955431
  type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

  // eslint-disable-next-line @typescript-eslint/ban-types
  type SingleKey<T> = IsUnion<keyof T> extends true
    ? never
    : {} extends T
    ? never
    : T;

  type Model<T> = T | Other;

  type primitiveTypes = string | number | Date | boolean;

  type Constructor<T> = new (...args: unknown[]) => T;
  namespace Express {
    interface Request {
      id: number;
      user: IUser
    }
  }
}

export { };
