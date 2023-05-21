import { RegisterAuthDto } from '../dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/services/users.service';
import { User } from 'src/user/entities/user.entity';
export declare class AuthService {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    register(newUser: RegisterAuthDto): Promise<User>;
    generateJWT(user: User): {
        access_token: string;
        user: User;
    };
    validateUser(email: string, password: string): Promise<User>;
}
