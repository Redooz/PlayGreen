import { User } from 'src/user/entities/user.entity';
import { UserBet } from './user-bet.entity';
export declare class UserTransaction {
    id: number;
    user: User;
    amount: number;
    category: string;
    user_bets: UserBet[];
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
