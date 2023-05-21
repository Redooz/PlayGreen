import { EventService } from '../services/event.service';
import { CreateEventDto } from '../dtos/create-event.dto';
import { UpdateEventDto } from '../dtos/update-event.dto';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    createEvent(eventDto: CreateEventDto, teamOption: number): Promise<import("../entities/event-teams.entity").Events>;
    getEventById(id: number): Promise<import("../entities/event-teams.entity").Events>;
    getAllEvents(): Promise<import("../entities/event-teams.entity").Events[]>;
    updateEvent(id: number, eventDto: UpdateEventDto): Promise<import("../entities/event-teams.entity").Events>;
    deleteEvent(id: number): Promise<void>;
}
