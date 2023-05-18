import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { RegisterAuthDto } from '../dto/RegisterUserDto';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.service.register(userObject);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  loginUser(@Req() req: Request) {
    return this.service.generateJWT(req.user as User);
  }
}
