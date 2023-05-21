import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Events } from 'src/event-teams/entities/event-teams.entity';
import { CreateEventDto } from 'src/event-teams/dtos/create-event.dto';

@Injectable()
export class EventsService {
  constructor(
    @Inject('EVENT_REPOSITORY')
    private eventRepository: Repository<Events>,
  ) {}

  async findAll() {
    return await this.eventRepository.find();
  }

  async findAllByTeam(teamId: number) {
    const events = await this.eventRepository.find({
      where: {
        team: {
          id: teamId,
        },
      },
    });

    return events;
  }

  async findAllByBet(betId: number) {
    const events = await this.eventRepository.find({
      where: {
        bet: {
          id: betId,
        },
      },
    });

    return events;
  }
}
