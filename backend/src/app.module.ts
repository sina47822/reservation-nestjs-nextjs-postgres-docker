import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookingModule } from './booking/booking.module';
import { BusinessModule } from 'src/business/business.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // نام سرویس در docker-compose
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'reservation_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // فقط در محیط توسعه
    }),
    AuthModule,
    UserModule,
    BookingModule,
    BusinessModule,
  ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
