import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Product2Service } from 'src/product2/product2.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, Product2Service],
  exports: [Product2Service],
})
export class OrderModule {}
