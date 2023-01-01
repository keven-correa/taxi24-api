import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { Distance } from './distance';


@Module({
  providers: [Distance],
  exports: [Distance],
  imports: [PrismaModule]

})
export class CommonModule {}