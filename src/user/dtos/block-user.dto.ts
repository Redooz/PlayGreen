import { IsEnum } from 'class-validator';
import { State } from '../constants/enums';

export class UserStateDto {
  @IsEnum(State)
  state: State;
}
