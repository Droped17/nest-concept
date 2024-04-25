import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduct2Dto } from './dto/create-product2.dto';
import { UpdateProduct2Dto } from './dto/update-product2.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class Product2Service {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}
  async create(createProduct2Dto: CreateProduct2Dto): Promise<Product> {
    const result = new this.productModel(createProduct2Dto);
    return result.save(); //promise
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(
    id: number,
    updateProduct2Dto: UpdateProduct2Dto,
  ): Promise<Product> {
    const result = this.productModel
      .findByIdAndUpdate(id, updateProduct2Dto, { new: true })
      .exec();
    return result;
  }

  async remove(id: number) {
    try {
      const result = await this.productModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException('id not found');
      }
      return { message: 'Delete successful' };
    } catch (error) {
      throw error;
    }
  }
}
