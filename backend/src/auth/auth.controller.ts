// backend/src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-email')
  async loginEmail(@Body() body: { email: string; password: string }) {
    return this.authService.loginWithEmail(body.email, body.password);
  }

  @Post('login-phone')
  async loginPhone(@Body() body: { phone: string; otp: string }) {
    return this.authService.loginWithPhone(body.phone, body.otp);
  }
}
