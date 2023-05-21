import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { User } from 'src/user/entities/user.entity';
import { Team } from 'src/team/entities/team.entity';
import { Events } from 'src/event-teams/entities/event-teams.entity';
import { Bet } from 'src/bet/entities/bet.entity';
import { UserTransaction } from 'src/user/entities/transaction.entity';
import { UserBet } from 'src/user/entities/user-bet.entity';

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
        entities: [User, UserTransaction, UserBet, Bet, Team, Events],
        synchronize: false,
      });

      return dataSource.initialize();
    },
    inject: [config.KEY],
  },
];
