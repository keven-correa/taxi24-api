import { Injectable } from '@nestjs/common';
import { Distance } from '../common/distance';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriversService {
  constructor(
    private prisma: PrismaService,
    private distance: Distance
  ){

  }
  async create(createDriverDto: CreateDriverDto) {
    return await this.prisma.driver.create({data: createDriverDto});
  }

  async findAll() {
    return await this.prisma.driver.findMany({orderBy: {Id: 'asc'}})
  }

  async findAllAvaliables(){
    return await this.prisma.driver.findMany({where: {Avaliable: true}, orderBy: {Id: 'asc'} })
  }

  async findNearby(location: string){
    return await this.distance.getAllAvailableDriversNearby(location, 3);
  }

  async findOne(id: number) {
    return await this.prisma.driver.findFirst({where: {Id: id}})
  }

  // update(id: number, updateDriverDto: UpdateDriverDto) {
  //   return `This action updates a #${id} driver`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} driver`;
  // }
}
