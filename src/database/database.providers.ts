import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { User } from 'src/user/entities/user.entity';
import { UserTransaction } from 'src/transaction/entities/transaction.entity';
import { UserBet } from 'src/user-bets/entities/user-bet.entity';
import { SportEvent } from 'src/sport-event/entities/sport-event.entity';
import { Team } from 'src/team/entities/team.entity';
import { EventTeams } from 'src/event-teams/entities/event-teams.entity';

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
        entities: [
          User,
          UserTransaction,
          UserBet,
          SportEvent,
          Team,
          EventTeams,
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
    inject: [config.KEY],
  },
];
