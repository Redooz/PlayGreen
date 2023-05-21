import { Bet } from '../entities/bet.entity';
import { Repository } from 'typeorm';
export declare class BetService {
    private betRepository;
    constructor(betRepository: Repository<Bet>);
    create(bet: Bet): Promise<Bet>;
    findOne(id: number): Promise<Bet>;
}
