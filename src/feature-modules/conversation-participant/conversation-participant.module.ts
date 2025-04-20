import { Module } from '@nestjs/common';
import { ConversationParticipantService } from './conversation-participant.service';
import { ConversationParticipantController } from './conversation-participant.controller';

@Module({
  controllers: [ConversationParticipantController],
  providers: [ConversationParticipantService],
})
export class ConversationParticipantModule {}
