import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateMessageDto {
    @IsNotEmpty()
    @IsUUID('4')
    conversationId: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsOptional()
    @IsBoolean()
    isEncrypted?: boolean;

    @IsOptional()
    @IsUUID('4')
    replyToId?: string;
}