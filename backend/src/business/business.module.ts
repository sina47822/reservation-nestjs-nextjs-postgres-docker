// backend/src/business/business.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Business } from './business.entity';
import { Service } from './service.entity';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Business, Service])],
  providers: [BusinessService],
  controllers: [BusinessController],
})
export class BusinessModule {}
