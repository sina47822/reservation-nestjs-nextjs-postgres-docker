// backend/src/business/service.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { Business } from './business.entity';
  import { Booking } from 'src/booking/booking.entity';
  
  @Entity('services')
  export class Service {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    description: string;
  
    // هر سرویس متعلق به یک بیزینس
    @ManyToOne(() => Business, (business) => business.services, {
      onDelete: 'CASCADE',
    })
    business: Business;
  
    // لیست رزروهای این سرویس
    @OneToMany(() => Booking, (booking) => booking.service)
    bookings: Booking[];
  }
  