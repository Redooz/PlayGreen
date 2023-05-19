import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from '../../auth/dto/register-user.dto';
import { UserStateDto } from '../dtos/block-user.dto';
import { Role } from '../constants/enums';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
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
    return await this.userRepository.save(newUser);
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

    // Soft Delete the user
    await this.userRepository.softDelete(user);
  }

  async updateState(id: number, blockUserDto: UserStateDto): Promise<User> {
    const user = await this.findById(id);

    // Check if the user is an admin
    if (user.role === Role.ADMIN) {
      throw new BadRequestException('Blocking admins is not allowed');
    }

    // Update the user's blocked status
    user.user_state = blockUserDto.state;

    // Save the updated user
    return await this.userRepository.save(user);
  }

  async depositMoney(id: number, amount: number): Promise<User> {
    const user = await this.findById(id);

    const updatedBalance = user.balance + amount;

    user.balance = updatedBalance;

    return await this.userRepository.save(user);
  }
}
