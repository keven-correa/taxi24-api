import { Injectable } from '@nestjs/common';
import { Distance } from 'src/common/distance';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';

@Injectable()
export class PassengersService {
  constructor(
    private prisma: PrismaService,
    private distance: Distance
  ){

  }
  async create(createPassengerDto: CreatePassengerDto) {
    return await this.prisma.passenger.create({data: createPassengerDto})
  }

  async findAll() {
    return await this.prisma.passenger.findMany({orderBy: {Id: 'asc'}})
  }

  async findOne(id: number) {
    return await this.prisma.passenger.findFirst({where: {Id: id}})
  }

  async findNearbyDrivers(location: string){
    return await this.distance.getAllAvailableDriversNearby(location, 3);
  }

  update(id: number, updatePassengerDto: CreatePassengerDto) {
    return `This action updates a #${id} passenger`;
  }

  remove(id: number) {
    return `This action removes a #${id} passenger`;
  }
}
