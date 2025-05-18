import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Conversation } from './entities/conversation.entity';
import { Repository } from 'typeorm';
import { ConversationParticipantService } from '../conversation-participant/conversation-participant.service';

@Injectable()
export class ConversationsService {
  constructor(
    @InjectRepository(Conversation)
    private readonly conversationRepository: Repository<Conversation>,
    private readonly conversationParticipantService: ConversationParticipantService,
  ) { }

  async create(createConversationDto: CreateConversationDto) {
    const { participantIds } = createConversationDto;
    const conversation = this.conversationRepository.create(createConversationDto);
    await this.conversationRepository.save(conversation);
    const { id } = conversation;
    for (const participantId of participantIds) {
      await this.conversationParticipantService.create({ conversationId: id, userId: participantId });
    }
    return conversation;
  }

  async getAll() {
    const conversation = await this.conversationRepository.findAndCount();
    if (!conversation) {
      throw new NotFoundException("Conversations Not Found");
    }
    return conversation;
  }
}
