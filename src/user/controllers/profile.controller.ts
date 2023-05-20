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
import { WithdrawDepositMoneyDto } from '../dtos/withdraw-deposit-money.dto';
import { BalanceResponse } from '../responses/balance.response';
import { UserTransaction } from 'src/transaction/entities/transaction.entity';
import { TransactionCategory } from 'src/transaction/constants/enums';

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

  @Post('deposit')
  @ApiOperation({ summary: 'Deposit money into user account' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  //
  depositMoney(@Req() req: Request, @Body() deposit: WithdrawDepositMoneyDto) {
    const user = req.user as PayloadToken;
    return this.userService.depositMoney(user.sub, deposit.amount);
  }

  @Post('withdraw')
  @ApiOperation({ summary: 'Withdraw money from user account' })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiUnprocessableEntityResponse({ description: 'Insufficient balance' })
  //
  withdrawMoney(@Req() req: Request, @Body() deposit: WithdrawDepositMoneyDto) {
    const user = req.user as PayloadToken;
    return this.userService.withdrawMoney(user.sub, deposit.amount);
  }

  @Get('balance')
  @ApiOperation({ summary: 'Get user balance' })
  @ApiResponse({ status: 200, description: 'Success', type: BalanceResponse })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  //
  getBalance(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.userService.getBalanceById(user.sub);
  }

  @Get('transactions')
  @ApiOperation({ summary: 'Get user transactions by type' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserTransaction,
    isArray: true,
  })
  //
  getTransactions(@Req() req: Request): Promise<UserTransaction[]> {
    const user = req.user as PayloadToken;
    return this.userService.getAllTransactions(user.sub);
  }

  @Get('transactions/:type')
  @ApiOperation({ summary: 'Get user transactions by type' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserTransaction,
    isArray: true,
  })
  //
  getTransactionsByType(
    @Req() req: Request,
    @Param('type') type: TransactionCategory,
  ): Promise<UserTransaction[]> {
    const user = req.user as PayloadToken;
    return this.userService.getTransactionsById(user.sub, type);
  }
}
