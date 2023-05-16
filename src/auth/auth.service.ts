import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/RegisterUserDto';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { LoginAuthDto } from './dto/LoginAuthDto';
import { compare, hash } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(newUser: RegisterAuthDto) {
    const { password } = newUser;
    const plainToHash = await hash(password, 10);

    newUser = { ...newUser, password: plainToHash };

    return this.userRepository.save(newUser);
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    if (!findUser) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) {
      throw new HttpException('INVALID_CREDENTIALS', HttpStatus.FORBIDDEN);
    }

    const payload = { id: findUser.id, role: findUser.role };
    const token = this.jwtService.sign(payload);

    const data = {
      user: findUser,
      token,
    };

    return data;
  }
}
