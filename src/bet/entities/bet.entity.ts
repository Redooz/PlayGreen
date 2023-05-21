import { ApiProperty } from '@nestjs/swagger';
import { Events } from 'src/event-teams/entities/event-teams.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BetStatus } from '../constants/bet.enums';
import { UserBet } from 'src/user/entities/user-bet.entity';

@Entity()
export class Bet {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => UserBet, (bet) => bet.betOption)
  userBets: UserBet[];

  @OneToMany(() => Events, (event) => event.bet)
  events: Events[];

  @Column({ default: BetStatus.ACTIVE })
  bet_status: string;

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  updated_at: Date;

  @Column({ default: false })
  @ApiProperty()
  deleted: boolean;

  @DeleteDateColumn()
  @ApiProperty()
  deleted_at: Date;
}
