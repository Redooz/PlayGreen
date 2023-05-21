import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  odd: number;
}
