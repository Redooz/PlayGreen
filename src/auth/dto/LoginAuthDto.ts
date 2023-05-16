import { IsEmail, IsEnum, MinLength } from 'class-validator';
import { Role } from './constants/enums';

export class LoginAuthDto {
  @IsEmail() email: string;

  @MinLength(8) password: string;

  @IsEnum(Role) role: Role;
}
