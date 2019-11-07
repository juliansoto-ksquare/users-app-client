import axios from 'axios';
import {User} from '../entities/User';
import {IUserService} from './UserService';

export const AxiosUserService = (): IUserService => {
    const createOne = async (user: User): Promise<User> => {
        const res = await axios.post(`${process.env.REACT_APP_API}/users`, user);
        return Promise.resolve(res.data.user as User);
    }

    const getOneById = async (id: string) => {
        const res = await axios.get(`${process.env.REACT_APP_API}/users/${id}`);
        return Promise.resolve(res.data.user);
    }

    const getList = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API}/users`);
        return Promise.resolve(res.data.users);
    }

    const save = async (user: User): Promise<User> => {
        const res = await axios.put(`${process.env.REACT_APP_API}/users`, user);
        return Promise.resolve(res.data.user);
    }

    return {
        createOne,
        getOneById,
        getList,
        save,
    }
}