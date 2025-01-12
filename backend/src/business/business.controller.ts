// backend/src/business/business.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { BusinessService } from './business.service';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  // ایجاد بیزینس جدید
  @Post()
  async createBusiness(
    @Body() body: { ownerId: number; name: string; description?: string },
  ) {
    return this.businessService.createBusiness(
      body.ownerId,
      body.name,
      body.description,
    );
  }

  // لیست بیزینس‌ها
  @Get()
  async getAllBusinesses() {
    return this.businessService.getAllBusinesses();
  }

  // ایجاد سرویس جدید برای یک بیزینس
  @Post(':businessId/service')
  async createService(
    @Param('businessId') businessId: number,
    @Body() body: { name: string; description?: string },
  ) {
    return this.businessService.createService(
      businessId,
      body.name,
      body.description,
    );
  }

  // مشاهده جزییات یک بیزینس
  @Get(':businessId')
  async getBusinessById(@Param('businessId') businessId: number) {
    return this.businessService.getBusinessById(businessId);
  }
}
