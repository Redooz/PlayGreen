import { DataSource } from 'typeorm';
import { UserBet } from './user-bet.entity';

export const userBetProviders = [
  {
    provide: 'USER_BET_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserBet),
    inject: ['DATA_SOURCE'],
  },
];
