import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderDocument, Order } from './schemas/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product2Service } from 'src/product2/product2.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    private product2Service: Product2Service,
  ) {}
  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    //check product
    const productResult = await this.product2Service.findOne(
      createOrderDto.productId,
    );
    if (!productResult) {
      throw new NotFoundException('product not found');
    }
    const result = new this.orderModel(createOrderDto);
    return result.save();
  }

  async findOne(id: string): Promise<Order> {
    const order = this.orderModel.findById(id).populate('productId').exec();
    return order;
  }
}
