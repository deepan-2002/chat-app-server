import { IsEmail, IsNotEmpty, IsString, Length, IsOptional, IsBoolean } from 'class-validator';
import { Column } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  passwordHash: string;

  @IsOptional()
  @IsString()
  publicKey?: string;

  @IsOptional()
  @IsString()
  avatarUrl?: string;

  @IsOptional()
  @IsBoolean()
  is_verified?: boolean;

  @IsString()
  name:string;
}