import { Module } from '@nestjs/common';
import { betProviders } from './entities/sport-bet.providers';
import { BetService } from './services/bet.service';

@Module({
  providers: [...betProviders, BetService],
})
export class BetModule {}
