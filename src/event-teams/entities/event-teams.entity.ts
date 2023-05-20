import { ApiProperty } from '@nestjs/swagger';
import { SportEvent } from 'src/sport-event/entities/sport-event.entity';
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
export class EventTeams {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SportEvent, (sportEvent) => sportEvent.eventsTeam)
  sportEvent: SportEvent;

  @ManyToOne(() => Team, (team) => team.eventsTeams)
  team: Team;

  @Column()
  odd: number;

  @Column()
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
