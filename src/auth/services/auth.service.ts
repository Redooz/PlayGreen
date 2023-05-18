import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from '../dto/RegisterUserDto';
import { compare, hash } from 'bcrypt';
import { PayloadToken } from '../models/token.model';
import { UserService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async register(newUser: RegisterAuthDto) {
    const { password } = newUser;
    const plainToHash = await hash(password, 10);

    newUser = { ...newUser, password: plainToHash };

    return this.userService.create(newUser);
  }

  generateJWT(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }

    const isMatch = await compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }
}
