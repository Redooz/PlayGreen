import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService as UsersService } from './users.service';
import { RegisterAuthDto } from '../auth/dto/RegisterUserDto';
import { JwtAuthGuard } from 'src/auth/jwtAuth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers() {
    return this.service.findAll();
  }

  @Post()
  createUser(@Body() newUser: RegisterAuthDto) {
    return this.service.create(newUser);
  }
}
