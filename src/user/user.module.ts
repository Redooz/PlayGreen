import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/users.service';
import { userProviders } from './entities/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileController } from './controllers/profile.controller';
import { TransactionService } from 'src/transaction/services/transaction.service';
import { TransactionModule } from 'src/transaction/transaction.module';
import { transactionProviders } from 'src/transaction/entities/transaction.providers';
import { BetsController } from './controllers/bets.controller';

@Module({
  imports: [DatabaseModule, TransactionModule],
  controllers: [UsersController, ProfileController, BetsController],
  providers: [
    ...userProviders,
    UserService,
    ...transactionProviders,
    TransactionService,
  ],
})
export class UserModule {}
