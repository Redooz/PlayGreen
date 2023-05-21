import { Bet } from 'src/bet/entities/bet.entity';
import { Team } from 'src/team/entities/team.entity';
export declare class Events {
    id: number;
    bet: Bet;
    team: Team;
    odd: number;
    result: string;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
    deleted_at: Date;
}
