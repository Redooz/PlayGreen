import { DataSource } from 'typeorm';
import { UserTransaction } from './transaction.entity';
export declare const transactionProviders: {
    provide: string;
    useFactory: (datasource: DataSource) => import("typeorm").Repository<UserTransaction>;
    inject: string[];
}[];
