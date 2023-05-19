import { ApiProperty } from '@nestjs/swagger';

export class BalanceResponse {
  @ApiProperty()
  user_id: number;

  @ApiProperty()
  balance: number;
}
