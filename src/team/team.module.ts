import { Module } from '@nestjs/common';
import { TeamService } from './services/team.service';
import { teamProviders } from './entities/team.providers';
import { TeamController } from './controllers/team.controller';
import { eventProviders } from 'src/event-teams/entities/event-teams.providers';
import { EventService } from 'src/event-teams/services/event.service';
import { EventsService } from './services/events.service';
import { betProviders } from 'src/bet/entities/sport-bet.providers';
import { BetService } from 'src/bet/services/bet.service';

@Module({
  providers: [
    ...teamProviders,
    TeamService,
    ...eventProviders,
    EventService,
    EventsService,
    ...betProviders,
    BetService,
  ],
  controllers: [TeamController],
})
export class TeamModule {}
