// backend/src/booking/booking.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  // ایجاد رزرو جدید
  async createBooking(
    userId: number,
    serviceId: number,
    start: Date,
    end: Date,
  ) {
    // (در عمل باید بررسی کنید که در آن بازه زمانی رزرو دیگری ثبت نشده باشد)
    const booking = this.bookingRepository.create({
      user: { id: userId },
      service: { id: serviceId },
      startTime: start,
      endTime: end,
    });
    return this.bookingRepository.save(booking);
  }

  // گرفتن همه رزروها (مثال ساده)
  async getAllBookings() {
    return this.bookingRepository.find({
      relations: ['user', 'service'],
    });
  }

  // گرفتن یک رزرو خاص
  async getBookingById(id: number) {
    return this.bookingRepository.findOne({
      where: { id },
      relations: ['user', 'service'],
    });
  }

  // تغییر وضعیت یک رزرو
  async updateBookingStatus(id: number, status: string) {
    await this.bookingRepository.update(id, { status });
    return this.getBookingById(id);
  }
}
