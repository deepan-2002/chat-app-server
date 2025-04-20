import { Injectable } from '@nestjs/common';
import { CreateAiConversationDto } from './dto/create-ai-conversation.dto';
import { UpdateAiConversationDto } from './dto/update-ai-conversation.dto';

@Injectable()
export class AiConversationsService {
  create(createAiConversationDto: CreateAiConversationDto) {
    return 'This action adds a new aiConversation';
  }

  findAll() {
    return `This action returns all aiConversations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiConversation`;
  }

  update(id: number, updateAiConversationDto: UpdateAiConversationDto) {
    return `This action updates a #${id} aiConversation`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiConversation`;
  }
}
