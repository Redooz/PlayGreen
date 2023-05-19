import { IsNumber, IsPositive } from 'class-validator';

export class WithdrawDepositMoneyDto {
  @IsNumber({
    allowNaN: false,
  })
  @IsPositive()
  amount: number;
}
