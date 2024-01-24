import { Test, TestingModule } from '@nestjs/testing';
import { transationsController } from './transations.controller';

describe('transationsController', () => {
  let controller: transationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [transationsController],
    }).compile();

    controller = module.get<transationsController>(transationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
