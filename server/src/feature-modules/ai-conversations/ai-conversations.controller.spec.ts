import { Test, TestingModule } from '@nestjs/testing';
import { AiConversationsController } from './ai-conversations.controller';
import { AiConversationsService } from './ai-conversations.service';

describe('AiConversationsController', () => {
  let controller: AiConversationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AiConversationsController],
      providers: [AiConversationsService],
    }).compile();

    controller = module.get<AiConversationsController>(AiConversationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
