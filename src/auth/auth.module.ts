import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { userProviders } from 'src/user/user.providers';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { UserService } from 'src/user/users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

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
    AuthService,
    JwtStrategy,
    LocalStrategy,
    UserService,
  ],
})
export class AuthModule {}
