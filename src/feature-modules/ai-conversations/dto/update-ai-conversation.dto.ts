import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateAiConversationDto {
    @IsOptional()
    @IsString()
    context?: string;

    @IsOptional()
    @IsString()
    @Length(1, 255)
    title?: string;
}
