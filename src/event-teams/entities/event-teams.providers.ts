import { DataSource } from 'typeorm';
import { Events } from './event-teams.entity';

export const eventProviders = [
  {
    provide: 'EVENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Events),
    inject: ['DATA_SOURCE'],
  },
];
