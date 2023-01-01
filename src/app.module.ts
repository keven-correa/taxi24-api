import { Module } from '@nestjs/common';
import { DriversModule } from './drivers/drivers.module';
import { PrismaModule } from './prisma/prisma.module';
import { PassengersModule } from './passengers/passengers.module';
import { TripsModule } from './trips/trips.module';
import { InvoicesModule } from './invoices/invoices.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [DriversModule, PrismaModule, PassengersModule, TripsModule, InvoicesModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
