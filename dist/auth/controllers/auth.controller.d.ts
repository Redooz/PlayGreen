import { AuthService } from '../services/auth.service';
import { RegisterAuthDto } from '../dto/register-user.dto';
import { Request } from 'express';
import { User } from 'src/user/entities/user.entity';
export declare class AuthController {
    private readonly service;
    constructor(service: AuthService);
    registerUser(userObject: RegisterAuthDto): Promise<User>;
    loginUser(req: Request): {
        access_token: string;
        user: User;
    };
}
