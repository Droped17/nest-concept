import { Test, TestingModule } from '@nestjs/testing';
import { Product2Controller } from './product2.controller';
import { Product2Service } from './product2.service';

describe('Product2Controller', () => {
  let controller: Product2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Product2Controller],
      providers: [Product2Service],
    }).compile();

    controller = module.get<Product2Controller>(Product2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
