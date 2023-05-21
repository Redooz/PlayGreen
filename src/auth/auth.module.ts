import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
import { userProviders } from 'src/user/entities/user.providers';
import { UserService } from 'src/user/services/users.service';
import { transactionProviders } from 'src/user/entities/transaction.providers';
import { TransactionService } from 'src/user/services/transaction.service';
import { BetService } from 'src/bet/services/bet.service';
import { betProviders } from 'src/bet/entities/sport-bet.providers';
import { userBetProviders } from 'src/user/entities/user-bet.providers';
import { UserBetService } from 'src/user/services/userBet.service';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: configService.jwtSecret,
          signOptions: {
            expiresIn: '30d',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    ...userProviders,
    ...transactionProviders,
    ...betProviders,
    ...userBetProviders,
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UserService,
    TransactionService,
    BetService,
    UserBetService,
  ],
})
export class AuthModule {}
