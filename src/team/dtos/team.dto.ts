import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty()
  teamName: string;
}

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}
