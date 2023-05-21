import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from '../../auth/dto/register-user.dto';
import { UserStateDto } from '../dtos/block-user.dto';
import { Role } from '../constants/user.enums';
import { BalanceResponse } from '../responses/balance.response';
import { TransactionService } from './transaction.service';
import { TransactionCategory } from '../constants/transactions.enums';
import { UserBet } from '../entities/user-bet.entity';
import { BetService } from 'src/bet/services/bet.service';
import { UserBetService } from './userBet.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private transactionService: TransactionService,
    private betService: BetService,
    private userBetService: UserBetService,
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

  async getAllTransactions(id: number) {
    const user = await this.findById(id);
    const transactions = await this.transactionService.getAllTransactions(user);

    return transactions;
  }

  async getTransactionsById(id: number, category: TransactionCategory) {
    const user = await this.findById(id);

    const transactions =
      await this.transactionService.getTransactionByUserAndCategory(
        user,
        category,
      );

    return transactions;
  }

  async depositMoney(id: number, amount: number) {
    const user = await this.findById(id);

    return await this.transactionService.createTransactionByUser(
      user,
      TransactionCategory.DEPOSIT,
      amount,
    );
  }

  async createUserBet(id: number, amount: number, betOption: number) {
    const user = await this.findById(id);
    const balance = await this.getBalanceById(id);

    if (balance.balance < amount) {
      throw new UnprocessableEntityException('Insufficient balance');
    }

    const transaction = await this.transactionService.createTransactionByUser(
      user,
      TransactionCategory.BET,
      amount,
    );

    const bet = await this.betService.findOne(betOption);
    const userBet = new UserBet();

    userBet.transaction = transaction;
    userBet.betOption = bet;

    return await this.userBetService.save(userBet);
  }

  async withdrawMoney(id: number, amount: number) {
    const user = await this.findById(id);
    const balance = await this.getBalanceById(id);

    if (balance.balance < amount) {
      throw new UnprocessableEntityException('Insufficient balance');
    }

    return this.transactionService.createTransactionByUser(
      user,
      TransactionCategory.WITHDRAW,
      amount,
    );
  }

  async getBalanceById(id: number) {
    const user = await this.findById(id);

    const balance = await this.transactionService.getBalanceByUser(user);

    const data: BalanceResponse = {
      user_id: user.id,
      balance: balance,
    };

    return data;
  }
}
