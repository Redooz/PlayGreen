import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import config from './config';
import { enviroments } from './enviroments';
import { BetModule } from './bet/bet.module';
import { TeamModule } from './team/team.module';
import { EventTeamsModule } from './event-teams/event-teams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.stag.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    BetModule,
    TeamModule,
    EventTeamsModule,
  ],
  providers: [],
})
export class AppModule {}
