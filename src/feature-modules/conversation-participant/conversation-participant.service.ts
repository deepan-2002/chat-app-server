import { Injectable } from '@nestjs/common';
import { CreateConversationParticipantDto } from './dto/create-conversation-participant.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ConversationParticipant } from './entities/conversation-participant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConversationParticipantService {
  constructor(
    @InjectRepository(ConversationParticipant)
    private readonly conversationParticipantRepo: Repository<ConversationParticipant>
  ) { }

  async create(createConversationParticipantDto: CreateConversationParticipantDto) {
    const coversationParticipants = this.conversationParticipantRepo.create(createConversationParticipantDto);
    await this.conversationParticipantRepo.save(coversationParticipants);
    return coversationParticipants;
  }
}
