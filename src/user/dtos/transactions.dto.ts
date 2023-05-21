import { IsNumber, IsPositive } from 'class-validator';

export class TransactionMoneyDto {
  @IsNumber({
    allowNaN: false,
  })
  @IsPositive()
  amount: number;
}
