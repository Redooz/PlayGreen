import { ApiProperty } from '@nestjs/swagger';

export enum Gender {
  /**
   * Represents male gender.
   */
  MALE = 'male',

  /**
   * Represents female gender.
   */
  FEMALE = 'female',

  /**
   * Represents other gender.
   */
  OTHER = 'other',
}

export enum Role {
  /**
   * Represents an admin role.
   */
  ADMIN = 'admin',

  /**
   * Represents a user role.
   */
  USER = 'user',
}
