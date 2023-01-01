import { Module } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { PassengersController } from './passengers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [PassengersController],
  providers: [PassengersService],
  imports: [PrismaModule, CommonModule],
  exports: [PassengersService]
})
export class PassengersModule {}
