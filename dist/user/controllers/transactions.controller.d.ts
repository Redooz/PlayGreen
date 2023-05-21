import { TransactionMoneyDto } from '../dtos/transactions.dto';
import { Request } from 'express';
import { UserService } from '../services/users.service';
import { UserTransaction } from '../entities/transaction.entity';
import { TransactionCategory } from '../constants/transactions.enums';
import { BalanceResponse } from '../responses/balance.response';
export declare class TransactionsController {
    private userService;
    constructor(userService: UserService);
    depositMoney(req: Request, deposit: TransactionMoneyDto): Promise<UserTransaction>;
    withdrawMoney(req: Request, deposit: TransactionMoneyDto): Promise<UserTransaction>;
    getBalance(req: Request): Promise<BalanceResponse>;
    getTransactions(req: Request): Promise<UserTransaction[]>;
    getTransactionsByType(req: Request, type: TransactionCategory): Promise<UserTransaction[]>;
    getBalanceById(id: number): Promise<BalanceResponse>;
    getTransactionsByUser(id: number): Promise<UserTransaction[]>;
    getTransactionsByUserAndType(userId: number, type: TransactionCategory): Promise<UserTransaction[]>;
}
