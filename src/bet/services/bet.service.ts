import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Bet } from '../entities/bet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BetService {
  constructor(
    @Inject('BET_REPOSITORY')
    private betRepository: Repository<Bet>,
  ) {}

  async create(bet: Bet) {
    return this.betRepository.save(bet);
  }

  async findOne(id: number) {
    const bet = await this.betRepository.findOne({
      where: {
        id,
      },
    });

    if (!bet) {
      throw new NotFoundException('Bet not found');
    }

    return bet;
  }
}
