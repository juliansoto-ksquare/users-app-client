import {User} from '../entities/User';

export interface IUserService {
  createOne: (user: User) => Promise<User>;
  getList: () => Promise<User[]>;
  getOneById: (id: string) => Promise<User>;
  save: (user: User) => Promise<User>;
}