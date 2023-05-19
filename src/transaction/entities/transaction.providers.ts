import { DataSource } from 'typeorm';
import { UserTransaction } from './transaction.entity';

export const transactionProviders = [
  {
    provide: 'TRANSACTION_REPOSITORY',
    useFactory: (datasource: DataSource) =>
      datasource.getRepository(UserTransaction),
    inject: ['DATA_SOURCE'],
  },
];
