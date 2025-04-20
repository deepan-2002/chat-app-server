import { Module } from '@nestjs/common';
import { AiMessagesService } from './ai-messages.service';
import { AiMessagesController } from './ai-messages.controller';

@Module({
  controllers: [AiMessagesController],
  providers: [AiMessagesService],
})
export class AiMessagesModule {}
