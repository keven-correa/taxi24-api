import { IsString, IsInt, IsNotEmpty, IsOptional, Min } from "class-validator";

export class CreateDriverDto {
    @IsString()
    @IsNotEmpty()
    Document: string;

    @IsString()
    @IsNotEmpty()
    Name: string;

    @IsString()
    @IsNotEmpty()
    LastName: string;

    @IsInt()
    @Min(18)
    Age: number

    @IsString()
    @IsNotEmpty()
    Location: string;

    @IsOptional()
    Avaliable: boolean;
}
