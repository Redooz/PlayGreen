import { IsDate, IsEmail, IsEnum, Length, MinLength } from 'class-validator';
import { Gender, Role } from './constants/enums';

export class RegisterAuthDto {
  @IsEnum(Role)
  role: Role;

  @MinLength(2)
  first_name: string;

  @MinLength(2)
  last_name: string;

  @MinLength(9)
  phone: string;

  @IsEmail()
  email: string;

  @MinLength(4)
  username: string;

  @MinLength(8)
  password: string;

  @MinLength(4)
  address: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  birth_date: Date;

  @Length(2)
  country_id: string;

  city: string;

  document_id: string;
}
