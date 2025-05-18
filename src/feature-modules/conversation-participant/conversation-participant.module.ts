import { Module } from '@nestjs/common';
import { ConversationParticipantService } from './conversation-participant.service';
import { ConversationParticipantController } from './conversation-participant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConversationParticipant } from './entities/conversation-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConversationParticipant])],
  controllers: [ConversationParticipantController],
  providers: [ConversationParticipantService],
})
export class ConversationParticipantModule { }
