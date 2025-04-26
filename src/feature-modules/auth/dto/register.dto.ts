import { OmitType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { CreateUserDto } from "src/feature-modules/users/dto/create-user.dto";

export class RegisterDto extends OmitType(CreateUserDto, ['passwordHash'] as const) {
    @IsNotEmpty()
    @IsString()
    @Length(8, 100)
    password: string;
}