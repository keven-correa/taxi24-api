import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassengersService } from './passengers.service';
import { CreatePassengerDto } from './dto/create-passenger.dto';

@Controller('passengers')
export class PassengersController {
  constructor(private readonly passengersService: PassengersService) {}

  @Post()
  create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengersService.create(createPassengerDto);
  }

  @Get('get-all')
  findAll() {
    return this.passengersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.passengersService.findOne(+id);
  }

  @Get('')
  findNearbyDrivers(@Body() body: any) {
    return this.passengersService.findNearbyDrivers(body.location);
  }
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassengerDto: CreatePassengerDto) {
    return this.passengersService.update(+id, updatePassengerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengersService.remove(+id);
  }
}
