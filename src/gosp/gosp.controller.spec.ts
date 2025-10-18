import { Test, TestingModule } from '@nestjs/testing';
import { GospController } from './gosp.controller';

describe('GospController', () => {
  let controller: GospController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GospController],
    }).compile();

    controller = module.get<GospController>(GospController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
