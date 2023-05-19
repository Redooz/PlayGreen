import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsEmail,
  IsEnum,
  Length,
  MinLength,
} from 'class-validator';
import { Gender } from '../../user/constants/enums';

export class UpdateUserDto {
  @ApiProperty({ description: 'First name of the user', example: 'John' })
  @MinLength(2)
  first_name: string;

  @ApiProperty({ description: 'Last name of the user', example: 'Doe' })
  @MinLength(2)
  last_name: string;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '123456789',
  })
  @MinLength(9)
  phone: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'test@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Username of the user', example: 'johndoe' })
  @MinLength(4)
  username: string;

  @ApiProperty({ description: 'Password of the user', example: 'password123' })
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'Address of the user',
    example: '123 Main Street',
  })
  @MinLength(4)
  address: string;

  @ApiProperty({
    enum: Gender,
    description: 'Gender of the user',
    example: Gender.MALE,
  })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty({ description: 'Birth date of the user', example: '1990-01-01' })
  @IsDateString()
  birth_date: Date;

  @ApiProperty({ description: 'Country ID of the user', example: 'US' })
  @Length(2)
  country_id: string;

  @ApiProperty({ description: 'City of the user', example: 'New York' })
  city: string;

  @ApiProperty({
    description: 'Document ID of the user',
    example: '1234567890',
  })
  document_id: string;
}
