import { DataSource } from 'typeorm';
import { Bet } from './bet.entity';
export declare const betProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Bet>;
    inject: string[];
}[];
