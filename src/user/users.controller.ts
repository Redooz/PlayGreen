import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService as UsersService } from './users.service';
import { RegisterAuthDto } from '../auth/dto/RegisterUserDto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/dto/constants/enums';
import { Public } from 'src/auth/decorators/public.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  //@Roles(Role.ADMIN)
  @Public()
  getUsers() {
    return this.service.findAll();
  }

  @Post()
  @Roles(Role.ADMIN)
  createUser(@Body() newUser: RegisterAuthDto) {
    return this.service.create(newUser);
  }
}
