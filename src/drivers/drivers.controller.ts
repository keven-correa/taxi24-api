import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get('get-all-drivers')
  findAll() {
    return this.driversService.findAll();
  }

  @Get('get-all-avaliable-drivers')
  findAllAvaliable() {
    return this.driversService.findAllAvaliables();
  }

  @Get('get-all-nearby-drivers')
  findNearbyDrivers(@Body() body: any) {
    return this.driversService.findNearby(body.location);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driversService.findOne(+id);
  }
  

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
  //   return this.driversService.update(+id, updateDriverDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.driversService.remove(+id);
  // }
}
