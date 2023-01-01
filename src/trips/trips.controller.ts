import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TripsService } from './trips.service';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  create(@Body() createTripDto: CreateTripDto) {
    return this.tripsService.createTripRequest(createTripDto);
  }

  @Get()
  findAll() {
    return this.tripsService.findAll();
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateTripDto: UpdateTripDto) {
    return this.tripsService.completeTrip(id, updateTripDto);
  }
}
