import { Injectable } from '@nestjs/common';
import { Driver, Passenger, Trip } from '@prisma/client';
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
    // return this.generateInvoiceOfTrip(passenger, driver, trip, finalPrice)
  }

  private generateInvoiceOfTrip(passenger: Passenger, driver: Driver, trip: Trip, price: number){
    return {
      "Invoice": {
        "Total": price + "$",
        "Date":  Date.now(),
        "To": trip.Address,
        "Duration": trip.Duration,
        "Distance": trip.DistanceCoveredKm,
        "Passenger": {
          "Name": passenger.name,
          "Last Name": passenger.LastName
        },
        "Driver": {
          "Name": driver.Name,
          "Last Name": driver.LastName
        }
      }
    }
  }
  async findAll() {
    return this.prisma.invoice.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} invoice`;
  // }

  // update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
  //   return `This action updates a #${id} invoice`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} invoice`;
  // }
}
