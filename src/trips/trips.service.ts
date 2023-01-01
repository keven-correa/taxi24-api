import { Inject, Injectable } from '@nestjs/common';
import { Driver, Passenger } from '@prisma/client';
import { InvoicesService } from 'src/invoices/invoices.service';
import { PassengersService } from 'src/passengers/passengers.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Injectable()
export class TripsService {
  constructor(
    private prisma: PrismaService,
    @Inject(InvoicesService)
    private ivoiceService: InvoicesService,
  ) {}
  async createTripRequest(createTripDto: CreateTripDto) {

    try {
      await this.prisma.trip.create({data: createTripDto})
    } catch (error) {
      console.log(error)
    }
    
  }

  async findAll() {
   return await this.prisma.trip.findMany({where: {Active: true}});
  }

  async completeTrip(id: number, updateTripDto: UpdateTripDto) {
     const complete = await this.prisma.trip.update({
      where: {Id: id},
      data: updateTripDto
    })
    const generateInvoice = await this.prisma.trip.findFirst({where: {Id: complete.Id}})
    
    return this.ivoiceService.create(generateInvoice);
  }
}
