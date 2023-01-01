import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { InvoicesController } from './invoices.controller';

@Module({
  controllers: [InvoicesController],
  providers: [InvoicesService],
  imports: [PrismaModule],
  exports: [InvoicesService]
})
export class InvoicesModule {}
