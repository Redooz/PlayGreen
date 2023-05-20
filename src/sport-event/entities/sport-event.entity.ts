import { ApiProperty } from '@nestjs/swagger';
import { EventTeams } from 'src/event-teams/entities/event-teams.entity';
import { UserBet } from 'src/user-bets/entities/user-bet.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SportEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => UserBet, (bet) => bet.sportEvent)
  userBets: UserBet[];

  @OneToMany(() => EventTeams, (eventTeam) => eventTeam.sportEvent)
  eventsTeam: EventTeams[];

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
