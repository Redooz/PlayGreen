import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { UserTransaction } from 'src/transaction/entities/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  role: string;

  @Column({ length: 50 })
  @ApiProperty()
  first_name: string;

  @Column({ length: 50 })
  @ApiProperty()
  last_name: string;

  @Column({ length: 20 })
  @ApiProperty()
  phone: string;

  @Column({ length: 255 })
  @ApiProperty()
  email: string;

  @Column({ length: 50 })
  @ApiProperty()
  username: string;

  @Column({ length: 255 })
  @ApiProperty()
  password: string;

  @Column({ length: 255 })
  @ApiProperty()
  address: string;

  @Column({ length: 10 })
  @ApiProperty()
  gender: string;

  @Column('date')
  @ApiProperty()
  birth_date: Date;

  @Column({ length: 2 })
  @ApiProperty()
  country_id: string;

  @Column({ length: 50 })
  @ApiProperty()
  city: string;

  @Column({ length: 20 })
  @ApiProperty()
  document_id: string;

  @Column({ default: 0 })
  @ApiProperty()
  balance: number;

  @Column({ default: 'active' })
  @ApiProperty()
  user_state: string;

  @OneToMany(() => UserTransaction, (transaction) => transaction.user)
  transactions: UserTransaction[];

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
