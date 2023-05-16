import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from 'src/user/user.providers';
import { JwtModule } from '@nestjs/jwt';
import { secret } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: secret,
      signOptions: { expiresIn: '730h' },
    }),
  ],
  controllers: [AuthController],
  providers: [...userProviders, AuthService, JwtStrategy],
})
export class AuthModule {}
