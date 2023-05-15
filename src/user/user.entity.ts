import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  role: string;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 255 })
  address: string;

  @Column({ length: 10 })
  gender: string;

  @Column('date')
  birth_date: Date;

  @Column({ length: 2 })
  country_id: string;

  @Column({ length: 50 })
  city: string;

  @Column({ length: 50 })
  category: string;

  @Column({ length: 20 })
  document_id: string;

  @Column({ length: 50 })
  user_state: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  deleted: boolean;

  @DeleteDateColumn()
  deleted_at: Date;
}
