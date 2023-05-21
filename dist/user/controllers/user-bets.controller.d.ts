import { UserService } from '../services/users.service';
import { Request } from 'express';
import { TransactionMoneyDto } from '../dtos/transactions.dto';
export declare class UserBetsController {
    private userService;
    constructor(userService: UserService);
    createBet(req: Request, transaction: TransactionMoneyDto, betOption: number): Promise<import("../entities/user-bet.entity").UserBet>;
}
