import { Inject, Injectable } from '@nestjs/common';
import { UserBet } from '../entities/user-bet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserBetService {
  constructor(
    @Inject('USER_BET_REPOSITORY')
    private userRepository: Repository<UserBet>,
  ) {}

  async save(userBet: UserBet) {
    return await this.userRepository.save(userBet);
  }
}
