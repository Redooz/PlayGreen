import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from '../auth/dto/RegisterUserDto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: RegisterAuthDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }
}
