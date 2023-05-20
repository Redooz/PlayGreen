import { ApiProperty } from '@nestjs/swagger';
import { Bet } from 'src/bet/entities/bet.entity';
import { UserTransaction } from 'src/transaction/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserBet {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Bet)
  @JoinColumn()
  betOption: Bet;

  @Column()
  amount: number;

  @Column()
  state: string;

  @ManyToOne(
    () => UserTransaction,
    (userTransaction) => userTransaction.user_bets,
  )
  transaction: UserTransaction;

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
