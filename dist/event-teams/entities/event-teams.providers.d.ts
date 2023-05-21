import { DataSource } from 'typeorm';
import { Events } from './event-teams.entity';
export declare const eventProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Events>;
    inject: string[];
}[];
