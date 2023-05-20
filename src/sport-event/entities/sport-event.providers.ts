import { DataSource } from 'typeorm';
import { SportEvent } from './sport-event.entity';

export const userProviders = [
  {
    provide: 'SPORT_EVENT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SportEvent),
    inject: ['DATA_SOURCE'],
  },
];
