import { Injectable } from '@nestjs/common';
import { CreateAiMessageDto } from './dto/create-ai-message.dto';
import { UpdateAiMessageDto } from './dto/update-ai-message.dto';

@Injectable()
export class AiMessagesService {
  create(createAiMessageDto: CreateAiMessageDto) {
    return 'This action adds a new aiMessage';
  }

  findAll() {
    return `This action returns all aiMessages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aiMessage`;
  }

  update(id: number, updateAiMessageDto: UpdateAiMessageDto) {
    return `This action updates a #${id} aiMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} aiMessage`;
  }
}
