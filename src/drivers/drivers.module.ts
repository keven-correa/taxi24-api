import { Module } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { DriversController } from './drivers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [DriversController],
  providers: [DriversService],
  imports: [PrismaModule, CommonModule]
})
export class DriversModule {}
