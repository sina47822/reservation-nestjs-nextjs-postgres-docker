// backend/src/user/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column ,OneToMany} from 'typeorm';
import { Business } from '../business/business.entity';
import { Booking } from '../booking/booking.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ unique: true, nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  password: string; // هش شده در عمل

  // اگر یک کاربر بتواند چندین بیزینس ایجاد کند:
  @OneToMany(() => Business, (business) => business.owner)
  ownedBusinesses: Business[];

  // اگر یک کاربر بتواند چندین رزرو داشته باشد:
  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];
}
