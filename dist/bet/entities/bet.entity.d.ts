import { Events } from 'src/event-teams/entities/event-teams.entity';
import { UserBet } from 'src/user/entities/user-bet.entity';
export declare class Bet {
    id: number;
    userBets: UserBet[];
    events: Events[];
    bet_status: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
