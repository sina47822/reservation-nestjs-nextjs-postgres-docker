// backend/src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email?: string; phone?: string; password?: string }) {
    return this.userService.createUser(body.email, body.phone, body.password);
  }
}
