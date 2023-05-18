import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService as UsersService } from './users.service';
import { RegisterAuthDto } from '../auth/dto/RegisterUserDto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/dto/constants/enums';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  //@Roles(Role.ADMIN)
  @UseGuards(AuthGuard('jwt'))
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
