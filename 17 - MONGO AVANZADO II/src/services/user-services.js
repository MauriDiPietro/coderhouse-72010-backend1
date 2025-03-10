import fs from 'fs';
import CustomError from '../utils/custom-error.js';
import { userDao } from '../daos/mongodb/user-dao.js';
import { petDao } from '../daos/mongodb/pet-dao.js';

class UserService {
    constructor(dao) {
        this.dao = dao;
    }

    aggregation1 = async(gender) =>{
        try {
            return await this.dao.aggregation1(gender);
        } catch (error) {
            throw new Error(error)
        }
    }

    aggregation2 = async() =>{
        try {
            return await this.dao.aggregation2();
        } catch (error) {
            throw new Error(error)
        }
    }

    updateManyAge = async()=>{
        try {
            return await this.dao.updateManyAge();
        } catch (error) {
            throw new Error(error)
        }
    }

    createFileUser = async () => {
        try {
            const usersFile = JSON.parse(fs.readFileSync(`${process.cwd()}/src/data-users/Users.json`, 'utf-8'));
            const newUsers = await this.dao.create(usersFile);
            if (!newUsers) throw new CustomError('Error creating users', 400);
            return newUsers.length;
        } catch (error) {
            throw (error);
        }
    }

    getByName = async (name) => {
        try {
            const user = await this.dao.getByName(name);
            if(!user) throw new CustomError('User not found', 404);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    getById = async (id) => {
        try {
            const user = await this.dao.getUserById(id);
            if(!user) throw new CustomError('User not found', 404);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    getAll = async(page, limit, first_name, sort) => {
        try {
            return await this.dao.getAllUsers(page, limit, first_name, sort);
        } catch (error) {
            throw new Error(error);
        }
    }

    addPetToUser = async (userId, petId) => {
        try {
            const existsPet = await petDao.getById(petId);
            if(!existsPet) throw new CustomError('Pet not found', 404);
            const user = await this.dao.addPetToUser(userId, petId);
            if(!user) throw new CustomError('User not found', 404);
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const userService = new UserService(userDao);