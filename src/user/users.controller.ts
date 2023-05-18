import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService as UsersService } from './users.service';
import { RegisterAuthDto } from '../auth/dto/RegisterUserDto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/dto/constants/enums';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Roles(Role.ADMIN)
  @Get()
  //@Roles(Role.ADMIN)
  getUsers() {
    return this.service.findAll();
  }

  @Post()
  @Roles(Role.ADMIN)
  createUser(@Body() newUser: RegisterAuthDto) {
    return this.service.create(newUser);
  }
}
