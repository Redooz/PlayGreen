import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
export declare const databaseProviders: {
    provide: string;
    useFactory: (configService: ConfigType<typeof config>) => Promise<DataSource>;
    inject: string[];
}[];
