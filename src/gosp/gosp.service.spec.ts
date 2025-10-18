import { Test, TestingModule } from '@nestjs/testing';
import { GospService } from './gosp.service';

describe('GospService', () => {
  let service: GospService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GospService],
    }).compile();

    service = module.get<GospService>(GospService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
