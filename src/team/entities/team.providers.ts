import { DataSource } from 'typeorm';
import { Team } from './team.entity';

export const userProviders = [
  {
    provide: 'TEAM_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Team),
    inject: ['DATA_SOURCE'],
  },
];
