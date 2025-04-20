import { IsNotEmpty, IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreateAiConversationDto {
    @IsNotEmpty()
    @IsUUID('4')
    userId: string;

    @IsOptional()
    @IsString()
    context?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    title?: string;
}