import { RegisterAuthDto } from '../../auth/dto/register-user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/users.service';
import { UserStateDto } from '../dtos/block-user.dto';
export declare class UsersController {
    private readonly service;
    constructor(service: UserService);
    getUsers(): Promise<User[]>;
    createUser(newUser: RegisterAuthDto): Promise<User>;
    getUserById(id: number): Promise<User>;
    updateUserById(id: number, updatedUser: Partial<User>): Promise<User>;
    deleteUserById(id: number): Promise<void>;
    updateState(id: number, userStateDto: UserStateDto): Promise<User>;
}
