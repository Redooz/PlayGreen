import { DataSource } from 'typeorm';
import { UserBet } from './user-bet.entity';
export declare const userBetProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<UserBet>;
    inject: string[];
}[];
