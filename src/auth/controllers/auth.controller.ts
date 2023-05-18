import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { RegisterAuthDto } from '../dto/register-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { LoginAuthDto } from '../dto/login-auth.dto';
import { User } from 'src/user/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @ApiResponse({ status: 201, description: 'User registered successfully' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: RegisterAuthDto })
  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.service.register(userObject);
  }

  @UseGuards(AuthGuard('local'))
  @ApiResponse({ status: 200, description: 'User logged in successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiBody({ type: LoginAuthDto })
  @Post('login')
  loginUser(@Req() req: Request) {
    return this.service.generateJWT(req.user as User);
  }
}
