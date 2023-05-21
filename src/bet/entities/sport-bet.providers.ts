import { DataSource } from 'typeorm';
import { Bet } from './bet.entity';

export const betProviders = [
  {
    provide: 'BET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Bet),
    inject: ['DATA_SOURCE'],
  },
];
