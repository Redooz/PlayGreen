import { Body, Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserService } from '../services/users.service';
import { PayloadToken } from 'src/auth/models/token.model';
import { Request } from 'express';
import { TransactionMoneyDto } from '../dtos/transactions.dto';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('User Bets')
@Controller('user-bets')
export class UserBetsController {
  constructor(private userService: UserService) {}

  @Post(':bet_option')
  @ApiOperation({ summary: 'Create a User Bet for an specific ber' })
  @ApiParam({ name: 'bet_option', description: 'Bet option number' })
  @ApiBody({ type: TransactionMoneyDto })
  @ApiResponse({ status: 201, description: 'Bet created' })
  //
  async createBet(
    @Req() req: Request,
    @Body() transaction: TransactionMoneyDto,
    @Param('bet_option') betOption: number,
  ) {
    const user = req.user as PayloadToken;
    return await this.userService.createUserBet(
      user.sub,
      transaction.amount,
      betOption,
    );
  }
}
