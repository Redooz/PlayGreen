import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventDto {
  @ApiProperty({ required: false })
  name?: string;

  @ApiProperty({ required: false })
  status?: string;

  @ApiProperty({ required: false })
  result?: string;

  // Include other properties that can be updated

  // Constructor to allow partial updates
  constructor(partial: Partial<UpdateEventDto>) {
    Object.assign(this, partial);
  }
}
