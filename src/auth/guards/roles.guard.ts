import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../dto/constants/enums';
import { ROLES_KEY } from '../roles.decorator';
import { PayloadToken } from '../models/token.model';
import { User } from 'src/user/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>(
      ROLES_KEY,
      context.getHandler(),
    );
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    console.log('User Role: ', user.role);
    console.log('Required: ', requiredRoles);

    const isAuth = requiredRoles.includes(user.role as Role);
    if (!isAuth) {
      throw new ForbiddenException('your role is wrong');
    }
    return isAuth;
  }
}
