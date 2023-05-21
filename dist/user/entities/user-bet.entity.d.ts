import { Bet } from 'src/bet/entities/bet.entity';
import { UserTransaction } from 'src/user/entities/transaction.entity';
export declare class UserBet {
    id: number;
    betOption: Bet;
    state: string;
    transaction: UserTransaction;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
