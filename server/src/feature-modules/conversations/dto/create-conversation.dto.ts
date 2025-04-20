import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateConversationDto {
  @IsOptional()
  @IsString()
  @Length(1, 100)
  name?: string;

  @IsOptional()
  @IsBoolean()
  isGroup?: boolean;

  @IsNotEmpty()
  @IsUUID('4', { each: true })
  participantIds: string[];
}