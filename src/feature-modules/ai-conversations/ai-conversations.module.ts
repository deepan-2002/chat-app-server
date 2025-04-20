import { Module } from '@nestjs/common';
import { AiConversationsService } from './ai-conversations.service';
import { AiConversationsController } from './ai-conversations.controller';

@Module({
  controllers: [AiConversationsController],
  providers: [AiConversationsService],
})
export class AiConversationsModule {}
