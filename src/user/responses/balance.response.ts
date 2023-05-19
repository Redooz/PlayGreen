import { ApiProperty } from '@nestjs/swagger';

export class BalanceResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  balance: number;
}
