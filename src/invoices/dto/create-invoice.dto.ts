import { IsInt, IsNotEmpty } from "class-validator";

export class CreateInvoiceDto {
    @IsInt()
    IdTrip: number;

    @IsNotEmpty()
    Price: number

}
