import { Request } from 'express';
import { UserService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
export declare class ProfileController {
    private userService;
    constructor(userService: UserService);
    getDetails(req: Request): Promise<User>;
    updateDetails(req: Request, updatedUser: UpdateUserDto): Promise<User>;
}
