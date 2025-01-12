// backend/src/business/business.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Business } from './business.entity';
import { Service } from './service.entity';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,

    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  // ایجاد بیزینس جدید
  async createBusiness(ownerId: number, name: string, description?: string) {
    const business = this.businessRepository.create({
      name,
      description,
      owner: { id: ownerId }, // فقط آیدی را ست می‌کنیم
    });
    return this.businessRepository.save(business);
  }

  // گرفتن همه بیزینس‌ها
  async getAllBusinesses() {
    return this.businessRepository.find({
      relations: ['services'], // اگر بخواهید سرویس‌ها را هم برگرداند
    });
  }

  // ایجاد سرویس جدید برای یک بیزینس
  async createService(businessId: number, serviceName: string, desc?: string) {
    const service = this.serviceRepository.create({
      name: serviceName,
      description: desc,
      business: { id: businessId }, // فقط آیدی را ست می‌کنیم
    });
    return this.serviceRepository.save(service);
  }

  // گرفتن جزییات یک بیزینس به همراه سرویس‌هایش
  async getBusinessById(businessId: number) {
    return this.businessRepository.findOne({
      where: { id: businessId },
      relations: ['services', 'owner'],
    });
  }
}
