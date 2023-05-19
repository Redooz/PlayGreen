import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserTransaction {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    example: 1,
    description: 'The unique identifier of the user transaction',
  })
  id: number;

  @ManyToOne(() => User, (user) => user.transactions)
  @ApiProperty({
    type: () => User,
    description: 'The user associated with the transaction',
  })
  user: User;

  @Column()
  @ApiProperty({ example: 100, description: 'The amount of the transaction' })
  amount: number;

  @Column()
  @ApiProperty({
    example: 'deposit',
    description:
      'The category of the transaction (deposit, withdraw, bet, winning)',
  })
  category: string;

  @Column({ default: 'pending' })
  @ApiProperty({
    example: 'pending',
    description: 'The status of the transaction',
  })
  status: string;

  @CreateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    type: Date,
    description: 'The timestamp when the transaction was created',
  })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    type: Date,
    description: 'The timestamp when the transaction was last updated',
  })
  updated_at: Date;

  @Column({ default: false })
  @ApiProperty({
    example: false,
    description: 'Indicates if the transaction has been deleted',
  })
  deleted: boolean;

  @DeleteDateColumn({ type: 'timestamp' })
  @ApiProperty({
    type: Date,
    description: 'The timestamp when the transaction was soft deleted',
  })
  deleted_at: Date;

  @Column({ nullable: true })
  @ApiProperty({
    example: 1,
    description: 'The ID of the associated user bet (if applicable)',
  })
  user_bet_id: number;
}
