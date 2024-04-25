import { Module } from '@nestjs/common';
import { Product2Service } from './product2.service';
import { Product2Controller } from './product2.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema, Product } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name, //name fron schema
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [Product2Controller],
  providers: [Product2Service],
})
export class Product2Module {}
