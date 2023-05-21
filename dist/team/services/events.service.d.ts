import { Repository } from 'typeorm';
import { Events } from 'src/event-teams/entities/event-teams.entity';
export declare class EventsService {
    private eventRepository;
    constructor(eventRepository: Repository<Events>);
    findAll(): Promise<Events[]>;
    findAllByTeam(teamId: number): Promise<Events[]>;
    findAllByBet(betId: number): Promise<Events[]>;
}
