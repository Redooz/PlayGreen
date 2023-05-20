import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionService } from './services/transaction.service';
import { transactionProviders } from './entities/transaction.providers';

@Module({
  controllers: [TransactionsController],
  providers: [...transactionProviders, TransactionService],
})
export class TransactionModule {}
