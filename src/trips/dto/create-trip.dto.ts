import { IsNotEmpty, IsString } from "class-validator";

export class CreateTripDto {
    @IsString()
    @IsNotEmpty()
    Address: string;

    Duration: number;

    // DateStart: Date

    // DateEnd: Date

    DistanceCoveredKm: number;

    Completed: boolean;

    Rating: number

    IdPassenger: number;

    IdDriver: number

}
