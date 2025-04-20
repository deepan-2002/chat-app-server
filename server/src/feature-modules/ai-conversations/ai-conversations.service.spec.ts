import { Test, TestingModule } from '@nestjs/testing';
import { AiConversationsService } from './ai-conversations.service';

describe('AiConversationsService', () => {
  let service: AiConversationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiConversationsService],
    }).compile();

    service = module.get<AiConversationsService>(AiConversationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
