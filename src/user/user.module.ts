import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/users.service';
import { userProviders } from './entities/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileController } from './controllers/profile.controller';
import { UserBetsController } from './controllers/user-bets.controller';
import { transactionProviders } from './entities/transaction.providers';
import { TransactionService } from './services/transaction.service';
import { betProviders } from 'src/bet/entities/sport-bet.providers';
import { BetService } from 'src/bet/services/bet.service';
import { userBetProviders } from './entities/user-bet.providers';
import { UserBetService } from './services/userBet.service';
import { BetModule } from 'src/bet/bet.module';
import { TransactionsController } from './controllers/transactions.controller';

@Module({
  imports: [DatabaseModule, BetModule],
  controllers: [
    UsersController,
    ProfileController,
    UserBetsController,
    TransactionsController,
  ],
  providers: [
    ...userProviders,
    UserService,
    ...transactionProviders,
    TransactionService,
    ...betProviders,
    BetService,
    ...userBetProviders,
    UserBetService,
  ],
})
export class UserModule {}
