// backend/src/booking/booking.controller.ts
import { Controller, Post, Get, Patch, Body, Param } from '@nestjs/common';
import { BookingService } from './booking.service';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // ایجاد رزرو
  @Post()
  async createBooking(
    @Body()
    body: {
      userId: number;
      serviceId: number;
      startTime: Date;
      endTime: Date;
    },
  ) {
    return this.bookingService.createBooking(
      body.userId,
      body.serviceId,
      new Date(body.startTime),
      new Date(body.endTime),
    );
  }

  // مشاهده همه رزروها
  @Get()
  async getAllBookings() {
    return this.bookingService.getAllBookings();
  }

  // مشاهده رزرو مشخص
  @Get(':id')
  async getBookingById(@Param('id') id: number) {
    return this.bookingService.getBookingById(id);
  }

  // تغییر وضعیت رزرو (مثلاً تایید/لغو)
  @Patch(':id/status')
  async updateBookingStatus(
    @Param('id') id: number,
    @Body() body: { status: string },
  ) {
    return this.bookingService.updateBookingStatus(id, body.status);
  }
}
