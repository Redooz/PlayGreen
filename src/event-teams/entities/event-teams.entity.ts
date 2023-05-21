import { ApiProperty } from '@nestjs/swagger';
import { Bet } from 'src/bet/entities/bet.entity';
import { Team } from 'src/team/entities/team.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Bet, (bet) => bet.events)
  bet: Bet;

  @ManyToOne(() => Team, (team) => team.eventsTeams)
  team: Team;

  @Column()
  odd: number;

  @Column({ nullable: true })
  result: string;

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
