import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { RegisterAuthDto } from '../../auth/dto/register-user.dto';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import { UserService } from '../services/users.service';
import { UserStateDto } from '../dtos/block-user.dto';
import { Role } from '../constants/user.enums';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@ApiTags('Users')
export class UsersController {
  constructor(private readonly service: UserService) {}

  @Roles(Role.ADMIN)
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: User,
    isArray: true,
  })
  getUsers() {
    return this.service.findAll();
  }

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created', type: User })
  createUser(@Body() newUser: RegisterAuthDto) {
    return this.service.create(newUser);
  }

  @Get(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiForbiddenResponse({
    description: 'Forbidden, Only admins are authorized',
  })
  getUserById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiForbiddenResponse({
    description: 'Forbidden, Only admins are authorized',
  })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  updateUserById(@Param('id') id: number, @Body() updatedUser: Partial<User>) {
    return this.service.update(id, updatedUser);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Success' })
  @ApiForbiddenResponse({
    description: 'Forbidden, Only admins are authorized',
  })
  deleteUserById(@Param('id') id: number) {
    return this.service.delete(id);
  }

  @Patch(':id/state')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Change state of a specific user' })
  @ApiResponse({ status: 200, description: 'User updated', type: User })
  @ApiForbiddenResponse({
    description: 'Forbidden, Only admins are authorized',
  })
  updateState(@Param('id') id: number, @Body() userStateDto: UserStateDto) {
    return this.service.updateState(id, userStateDto);
  }
}
