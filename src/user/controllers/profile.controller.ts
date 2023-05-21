import {
  Body,
  Controller,
  Get,
  Param,
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
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { PayloadToken } from 'src/auth/models/token.model';
import { UserService } from '../services/users.service';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { TransactionMoneyDto } from '../dtos/transactions.dto';
import { BalanceResponse } from '../responses/balance.response';
import { UserTransaction } from '../entities/transaction.entity';
import { TransactionCategory } from '../constants/transactions.enums';

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
  //
  getDetails(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.userService.findById(user.sub);
  }

  @Patch()
  @ApiOperation({ summary: 'Update user details' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  //
  updateDetails(@Req() req: Request, @Body() updatedUser: UpdateUserDto) {
    const user = req.user as PayloadToken;
    return this.userService.update(user.sub, updatedUser);
  }
}
