import { DataSource } from 'typeorm';
import { Team } from './team.entity';
export declare const teamProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Team>;
    inject: string[];
}[];
