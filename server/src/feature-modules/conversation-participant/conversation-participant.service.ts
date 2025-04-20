import { Injectable } from '@nestjs/common';
import { CreateConversationParticipantDto } from './dto/create-conversation-participant.dto';
import { UpdateConversationParticipantDto } from './dto/update-conversation-participant.dto';

@Injectable()
export class ConversationParticipantService {
  create(createConversationParticipantDto: CreateConversationParticipantDto) {
    return 'This action adds a new conversationParticipant';
  }

  findAll() {
    return `This action returns all conversationParticipant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversationParticipant`;
  }

  update(id: number, updateConversationParticipantDto: UpdateConversationParticipantDto) {
    return `This action updates a #${id} conversationParticipant`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversationParticipant`;
  }
}
