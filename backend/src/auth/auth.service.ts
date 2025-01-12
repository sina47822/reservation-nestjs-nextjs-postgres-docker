// backend/src/auth/auth.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
// import { JwtService } from '@nestjs/jwt'; // اگر JWT استفاده می‌کنید

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  // ورود با ایمیل و پسورد
  async loginWithEmail(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (user.password !== password) {
      // در عمل باید رمز عبور هش شده را بررسی کنید
      throw new BadRequestException('Invalid password');
    }
    return { message: 'Login successful (email)', user };
  }

  // ورود با موبایل و OTP (دمو)
  async loginWithPhone(phone: string, otp: string) {
    // در عمل: چک کردن صحت کد OTP، منقضی نشدن آن و ...
    const user = await this.userService.findByPhone(phone);
    if (!user) {
      throw new BadRequestException('User not found');
    }
    if (otp !== '1234') { // دمو
      throw new BadRequestException('Invalid OTP');
    }
    return { message: 'Login successful (phone)', user };
  }
}
