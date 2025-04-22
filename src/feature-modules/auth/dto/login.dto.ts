import { IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 50)
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}