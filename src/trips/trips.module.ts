import { Module } from '@nestjs/common';
import { TripsService } from './trips.service';
import { TripsController } from './trips.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from '../common/common.module';
import { PassengersModule } from '../passengers/passengers.module';
import { DriversModule } from '../drivers/drivers.module';
import { PassengersService } from '../passengers/passengers.service';
import { InvoicesModule } from 'src/invoices/invoices.module';

@Module({
  controllers: [TripsController],
  providers: [TripsService],
  imports: [PrismaModule, CommonModule, PassengersModule, DriversModule, InvoicesModule]

})
export class TripsModule {}
