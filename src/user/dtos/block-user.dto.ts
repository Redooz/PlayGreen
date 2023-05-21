import { IsEnum } from 'class-validator';
import { State } from '../constants/user.enums';

export class UserStateDto {
  @IsEnum(State)
  state: State;
}
