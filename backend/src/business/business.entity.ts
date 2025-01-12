// backend/src/business/business.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { User } from 'src/user/user.entity';
  import { Service } from './service.entity';
  
  @Entity('businesses')
  export class Business {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ nullable: true })
    description: string;
  
    // صاحب این بیزینس
    @ManyToOne(() => User, (user) => user.ownedBusinesses, { eager: true })
    owner: User;
  
    // لیست سرویس‌های این بیزینس
    @OneToMany(() => Service, (service) => service.business)
    services: Service[];
  }
  