import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PayloadToken } from 'src/auth/models/token.model';
import { UserService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { DepositMoneyDto } from '../dtos/deposit-money.dto';

@Controller('profile')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('Profile')
export class ProfileController {
  constructor(private userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get user details' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  getDetails(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.userService.findById(user.sub);
  }

  @Patch()
  @ApiOperation({ summary: 'Update user details' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  updateDetails(@Req() req: Request, @Body() updatedUser: UpdateUserDto) {
    const user = req.user as PayloadToken;
    return this.userService.update(user.sub, updatedUser);
  }

  @Post('deposit')
  @ApiOperation({ summary: 'Deposit money into user account' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  depositMoney(@Req() req: Request, @Body() deposit: DepositMoneyDto) {
    const user = req.user as PayloadToken;

    return this.userService.depositMoney(user.sub, deposit.amount);
  }
}
