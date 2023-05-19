import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UserService } from './services/users.service';
import { userProviders } from './entities/user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileController } from './controllers/profile.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, ProfileController],
  providers: [...userProviders, UserService],
})
export class UserModule {}
