import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserTransaction } from '../entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import { TransactionCategory } from '../constants/enums';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: Repository<UserTransaction>,
  ) {}

  async getBalanceByUser(user: User) {
    const totalDepositsValue = await this.getTransactionValueByUser(
      user,
      TransactionCategory.DEPOSIT,
    );
    const totalWithdrawsValue = await this.getTransactionValueByUser(
      user,
      TransactionCategory.WITHDRAW,
    );

    const balance = totalDepositsValue - totalWithdrawsValue;
    return balance;
  }

  async getAllTransactions(user: User) {
    const transactions = await this.transactionRepository.find({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    return transactions;
  }

  async getTransactionByUserAndCategory(
    user: User,
    category: TransactionCategory,
  ) {
    const transactions = await this.transactionRepository.find({
      where: {
        category: category,
        user: {
          id: user.id,
        },
      },
    });

    return transactions;
  }

  async getTransactionValueByUser(user: User, category: TransactionCategory) {
    const transactions = await this.transactionRepository.find({
      where: {
        user: {
          id: user.id,
        },
        category: category,
      },
    });
    let totalValue = 0;

    transactions.forEach((deposit) => {
      totalValue += deposit.amount;
    });

    return totalValue;
  }

  async createTransactionByUser(user: User, type: string, value: number) {
    const transaction = new UserTransaction();
    transaction.user = user;
    transaction.category = type;
    transaction.amount = value;

    return await this.transactionRepository.save(transaction);
  }
}
