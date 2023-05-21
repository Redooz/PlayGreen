import { Module } from '@nestjs/common';
import { eventProviders } from './entities/event-teams.providers';
import { EventController } from './controllers/event.controller';
import { EventService } from './services/event.service';
import { teamProviders } from 'src/team/entities/team.providers';
import { TeamService } from 'src/team/services/team.service';
import { TeamModule } from 'src/team/team.module';
import { BetModule } from 'src/bet/bet.module';
import { betProviders } from 'src/bet/entities/sport-bet.providers';
import { BetService } from 'src/bet/services/bet.service';
@Module({
  imports: [TeamModule, BetModule],
  providers: [
    ...eventProviders,
    EventService,
    ...teamProviders,
    TeamService,
    ...betProviders,
    BetService,
  ],
  controllers: [EventController],
})
export class EventTeamsModule {}
