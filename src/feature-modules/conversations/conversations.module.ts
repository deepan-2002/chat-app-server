import { Module } from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { ConversationsController } from './conversations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';
import { ConversationParticipantModule } from '../conversation-participant/conversation-participant.module';
import { ConversationParticipantService } from '../conversation-participant/conversation-participant.service';
import { ConversationParticipant } from '../conversation-participant/entities/conversation-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conversation, ConversationParticipant]),
    ConversationParticipantModule,
  ],
  controllers: [ConversationsController],
  providers: [ConversationsService, ConversationParticipantService],
})
export class ConversationsModule { }
