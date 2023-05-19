import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import config from './config';
import { enviroments } from './enviroments';
import { TransactionModule } from './transaction/transaction.module';
import { UserBetsModule } from './user-bets/user-bets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    UserModule,
    AuthModule,
    TransactionModule,
    UserBetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
