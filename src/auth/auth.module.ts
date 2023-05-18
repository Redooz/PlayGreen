import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/user/user.providers';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UserService } from 'src/user/users.service';

@Module({
  imports: [UserModule, DatabaseModule, PassportModule],
  controllers: [AuthController],
  providers: [
    ...userProviders,
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UserService,
  ],
})
export class AuthModule {}
