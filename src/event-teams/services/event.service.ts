import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Events } from '../entities/event-teams.entity';
import { Repository } from 'typeorm';
import { CreateEventDto } from '../dtos/create-event.dto';
import { UpdateEventDto } from '../dtos/update-event.dto';
import { TeamService } from '../../team/services/team.service';
import { Bet } from 'src/bet/entities/bet.entity';
import { BetService } from 'src/bet/services/bet.service';

@Injectable()
export class EventService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Events>,
    private teamService: TeamService,
    private betService: BetService,
  ) {}

  async getAll() {
    const events = await this.eventRepository.find();

    return events;
  }

  async createEvent(
    event: CreateEventDto,
    teamOption: number,
  ): Promise<Events> {
    const team = await this.teamService.findById(teamOption);
    const newBet = new Bet();

    this.betService.create(newBet);

    const newEvent = await this.eventRepository.save({
      odd: event.odd,
      team: team,
      bet: newBet,
    });

    return newEvent;
  }

  async getEventById(id: number): Promise<Events> {
    const event = await this.eventRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  async updateEvent(id: number, event: UpdateEventDto): Promise<Events> {
    const existingEvent = await this.getEventById(id);
    const updatedEvent = Object.assign(existingEvent, event);
    return this.eventRepository.save(updatedEvent);
  }

  async deleteEvent(id: number): Promise<void> {
    const event = await this.getEventById(id);
    await this.eventRepository.remove(event);
  }
}
