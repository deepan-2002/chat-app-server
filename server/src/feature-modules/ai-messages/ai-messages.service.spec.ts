import { Test, TestingModule } from '@nestjs/testing';
import { AiMessagesService } from './ai-messages.service';

describe('AiMessagesService', () => {
  let service: AiMessagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AiMessagesService],
    }).compile();

    service = module.get<AiMessagesService>(AiMessagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
