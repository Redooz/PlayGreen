import { DataSource } from 'typeorm';
import { EventTeams } from './event-teams.entity';

export const userProviders = [
  {
    provide: 'EVENT_TEAMS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(EventTeams),
    inject: ['DATA_SOURCE'],
  },
];
