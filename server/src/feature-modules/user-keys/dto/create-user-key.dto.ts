import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateUserKeyDto {
  @IsNotEmpty()
  @IsUUID('4')
  userId: string;

  @IsNotEmpty()
  @IsString()
  deviceId: string;

  @IsNotEmpty()
  @IsString()
  publicKey: string;
}