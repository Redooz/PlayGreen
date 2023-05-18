import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from '../../auth/dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number) {
    const user = await this.userRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });

    return user;
  }

  async create(user: RegisterAuthDto) {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async update(id: number, updatedUser: Partial<User>) {
    const user = await this.findById(id);

    Object.assign(user, updatedUser);

    return await this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findById(id);

    // Set the "deleted" flag to true
    user.deleted = true;

    // Save the updated user
    await this.userRepository.save(user);
  }
}
