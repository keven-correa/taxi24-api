import { Injectable } from '@nestjs/common';
import { Trip } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class InvoicesService {
  constructor(
    private prisma: PrismaService
  ){}
  async create(trip: Trip) {
    
    const costPerMinute: number = 5;
    const finalPrice: number = trip.Duration * costPerMinute;

    return await this.prisma.invoice.create({
      data: {
        "IdTrip": trip.Id,
        "Price": finalPrice
      }
    });
  }

  async findAll() {
    return this.prisma.invoice.findMany();
  }

}
