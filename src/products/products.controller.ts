import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products') //like do route
export class ProductsController {
  // recieve ProductsService and inject to productService
  constructor(private readonly productService: ProductsService) {}

  //GET path '/products'
  @Get()
  getAllProdcuts() {
    return this.productService.findAll(); //response
  }

  // POST path '/products'
  @Post()
  addProducts(@Body() product: object) {
    return this.productService.create(product); //response
  }
}
