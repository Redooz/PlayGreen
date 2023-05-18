import { User } from 'src/user/user.entity';
import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: (configService: ConfigType<typeof config>) => {
      const { host, name, password, port, user } = configService.mysql;

      const dataSource = new DataSource({
        type: 'mysql',
        host: host,
        port: port,
        username: user,
        password: password,
        database: name,
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [config.KEY],
  },
];
