import { PartialType } from '@nestjs/mapped-types';
import { CreateAiMessageDto } from './create-ai-message.dto';

export class UpdateAiMessageDto extends PartialType(CreateAiMessageDto) {}
