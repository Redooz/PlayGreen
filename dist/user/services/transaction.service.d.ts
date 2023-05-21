import { Repository } from 'typeorm';
import { UserTransaction } from '../entities/transaction.entity';
import { User } from 'src/user/entities/user.entity';
import { TransactionCategory } from '../constants/transactions.enums';
export declare class TransactionService {
    private transactionRepository;
    constructor(transactionRepository: Repository<UserTransaction>);
    getBalanceByUser(user: User): Promise<number>;
    getAllTransactions(user: User): Promise<UserTransaction[]>;
    getTransactionByUserAndCategory(user: User, category: TransactionCategory): Promise<UserTransaction[]>;
    getTransactionValueByUser(user: User, category: TransactionCategory): Promise<number>;
    createTransactionByUser(user: User, type: string, value: number): Promise<UserTransaction>;
}
