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

    await this.prisma.trip.create({data: createTripDto})
    
  }

  async findAll() {
   return await this.prisma.trip.findMany({where: {Active: true}});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} trip`;
  // }

  async completeTrip(id: number, updateTripDto: UpdateTripDto) {
     const complete = await this.prisma.trip.update({
      where: {Id: id},
      data: updateTripDto
    })

    const get = await this.prisma.trip.findFirst({where: {Id: id}})

    return this.ivoiceService.create(get);
  }

  remove(id: number) {
    return `This action removes a #${id} trip`;
  }

  // private tripData(passenger: Passenger, driver: Driver, location: string){
  //   const trip = {
  //     Adrress: location,
  //     DateStart: new Date().toISOString(),
  //     DateEnd: new Date('0001-01-01'),
  //     Duration: 0,
  //     DistanceCoveredKm: 0,
  //     Completed: false,
  //     Active: true,
  //     Rating: 0,
  //     IdDriver: driver.Id,
  //     IdPassenger: passenger.Id
  //   }
  //   return trip;
  // }
  // private async UpdateAvaliabilityOfDriver(driver: Driver, avaliable: boolean){
  //   await this.prisma.driver.update({
  //     where: {Id: driver.Id},
  //     data: {'Avaliable': avaliable}
  //   })
  // }
}
