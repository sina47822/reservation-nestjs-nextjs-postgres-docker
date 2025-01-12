// backend/src/booking/booking.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Service } from '../business/service.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  // کاربری که رزرو کرده
  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  // سرویسی که رزرو می‌شود (مثلاً نوبت آرایش مو)
  @ManyToOne(() => Service, (service) => service.bookings)
  service: Service;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, CONFIRMED, CANCELED, ...
}
