import { UserBet } from '../entities/user-bet.entity';
import { Repository } from 'typeorm';
export declare class UserBetService {
    private userRepository;
    constructor(userRepository: Repository<UserBet>);
    save(userBet: UserBet): Promise<UserBet>;
}
