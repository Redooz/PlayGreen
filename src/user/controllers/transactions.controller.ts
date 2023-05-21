import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiForbiddenResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { User } from '../entities/user.entity';
import { TransactionMoneyDto } from '../dtos/transactions.dto';
import { PayloadToken } from 'src/auth/models/token.model';
import { Request } from 'express';
import { UserService } from '../services/users.service';
import { UserTransaction } from '../entities/transaction.entity';
import { TransactionCategory } from '../constants/transactions.enums';
import { BalanceResponse } from '../responses/balance.response';
import { Role } from '../constants/user.enums';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
@ApiTags('Transactions')
@Controller('transaction')
export class TransactionsController {
  constructor(private userService: UserService) {}

  @Post('deposit')
  @ApiOperation({ summary: 'Deposit money into user account' })
  @ApiBody({ type: TransactionMoneyDto })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  //
  depositMoney(@Req() req: Request, @Body() deposit: TransactionMoneyDto) {
    const user = req.user as PayloadToken;
    return this.userService.depositMoney(user.sub, deposit.amount);
  }

  @Post('withdraw')
  @ApiOperation({ summary: 'Withdraw money from user account' })
  @ApiBody({ type: TransactionMoneyDto })
  @ApiResponse({ status: 200, description: 'Success', type: User })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiUnprocessableEntityResponse({ description: 'Insufficient balance' })
  //
  withdrawMoney(@Req() req: Request, @Body() deposit: TransactionMoneyDto) {
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

  @Get()
  @ApiOperation({ summary: 'Get all user transactions' })
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

  @Get(':type')
  @ApiOperation({ summary: 'Get user transactions by type' })
  @ApiParam({ name: 'type', enum: TransactionCategory })
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

  @Get('balance/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get the balance of a specific user' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Success', type: BalanceResponse })
  @ApiForbiddenResponse({
    description: 'Forbidden, Only admins are authorized',
  })
  //
  getBalanceById(@Param('id') id: number) {
    return this.userService.getBalanceById(id);
  }

  @Get('transactions/:id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get all user transactions by user ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserTransaction,
    isArray: true,
  })
  //
  getTransactionsByUser(@Param('id') id: number): Promise<UserTransaction[]> {
    return this.userService.getAllTransactions(id);
  }

  @Get(':id/:type')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Get user transactions by type and user ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiParam({ name: 'type', enum: TransactionCategory })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserTransaction,
    isArray: true,
  })
  //
  getTransactionsByUserAndType(
    @Param('id') userId: number,
    @Param('type') type: TransactionCategory,
  ): Promise<UserTransaction[]> {
    return this.userService.getTransactionsById(userId, type);
  }
}
