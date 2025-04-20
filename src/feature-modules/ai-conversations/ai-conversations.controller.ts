import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiConversationsService } from './ai-conversations.service';
import { CreateAiConversationDto } from './dto/create-ai-conversation.dto';
import { UpdateAiConversationDto } from './dto/update-ai-conversation.dto';

@Controller('ai-conversations')
export class AiConversationsController {
  constructor(private readonly aiConversationsService: AiConversationsService) {}

  @Post()
  create(@Body() createAiConversationDto: CreateAiConversationDto) {
    return this.aiConversationsService.create(createAiConversationDto);
  }

  @Get()
  findAll() {
    return this.aiConversationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiConversationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiConversationDto: UpdateAiConversationDto) {
    return this.aiConversationsService.update(+id, updateAiConversationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiConversationsService.remove(+id);
  }
}
