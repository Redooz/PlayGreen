import { Events } from '../entities/event-teams.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../dtos/create-event.dto';
import { UpdateEventDto } from '../dtos/update-event.dto';
import { TeamService } from '../../team/services/team.service';
import { BetService } from 'src/bet/services/bet.service';
export declare class EventService {
    private eventRepository;
    private teamService;
    private betService;
    constructor(eventRepository: Repository<Events>, teamService: TeamService, betService: BetService);
    getAll(): Promise<Events[]>;
    createEvent(event: CreateEventDto, teamOption: number): Promise<Events>;
    getEventById(id: number): Promise<Events>;
    updateEvent(id: number, event: UpdateEventDto): Promise<Events>;
    deleteEvent(id: number): Promise<void>;
}
