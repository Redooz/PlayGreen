import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from '../dto/RegisterUserDto';
import { LoginAuthDto } from '../dto/LoginAuthDto';
import { compare, hash } from 'bcrypt';
import { PayloadToken } from '../models/token.model';
import { UserService } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async register(newUser: RegisterAuthDto) {
    const { password } = newUser;
    const plainToHash = await hash(password, 10);

    newUser = { ...newUser, password: plainToHash };

    return this.userService.create(newUser);
  }

  /*async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.userService.findByEmail(email);

    if (!findUser) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) {
      throw new HttpException('INVALID_CREDENTIALS', HttpStatus.FORBIDDEN);
    }

    const payload: PayloadToken = { role: findUser.role, sub: findUser.id };
    return {
      access_token: this.jwtService.sign(payload),
      user: findUser,
    };
  }*/

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const isMatch = await compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }
}
