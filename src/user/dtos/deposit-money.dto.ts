import { IsNumber, IsPositive } from 'class-validator';

export class DepositMoneyDto {
  @IsNumber({
    allowNaN: false,
  })
  @IsPositive()
  amount: number;
}
