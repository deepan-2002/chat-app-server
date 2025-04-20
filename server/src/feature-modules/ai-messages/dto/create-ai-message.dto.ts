import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAiMessageDto {
    @IsNotEmpty()
    @IsUUID('4')
    aiConversationId: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsBoolean()
    isFromAi: boolean;
}