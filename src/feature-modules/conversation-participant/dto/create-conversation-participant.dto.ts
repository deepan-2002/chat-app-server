import { IsBoolean, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateConversationParticipantDto {
    @IsNotEmpty()
    @IsUUID('4')
    conversationId: string;

    @IsNotEmpty()
    @IsUUID('4')
    userId: string;

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean;
}