import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePassengerDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    LastName: string;

    @IsInt()
    @IsNotEmpty()
    Age: number;

    @IsString()
    @IsNotEmpty()
    Location: string
}
