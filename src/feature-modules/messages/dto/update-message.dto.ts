import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateMessageDto {
    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsBoolean()
    isEdited?: boolean;

    @IsOptional()
    @IsBoolean()
    isDeleted?: boolean;
}