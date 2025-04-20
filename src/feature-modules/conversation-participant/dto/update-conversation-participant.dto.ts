import { IsOptional, IsUUID, IsBoolean } from 'class-validator';

export class UpdateConversationParticipantDto {
    @IsOptional()
    @IsUUID('4')
    lastReadMessageId?: string;

    @IsOptional()
    @IsBoolean()
    isAdmin?: boolean;
}