import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AiMessagesService } from './ai-messages.service';
import { CreateAiMessageDto } from './dto/create-ai-message.dto';
import { UpdateAiMessageDto } from './dto/update-ai-message.dto';

@Controller('ai-messages')
export class AiMessagesController {
  constructor(private readonly aiMessagesService: AiMessagesService) {}

  @Post()
  create(@Body() createAiMessageDto: CreateAiMessageDto) {
    return this.aiMessagesService.create(createAiMessageDto);
  }

  @Get()
  findAll() {
    return this.aiMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aiMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAiMessageDto: UpdateAiMessageDto) {
    return this.aiMessagesService.update(+id, updateAiMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aiMessagesService.remove(+id);
  }
}
