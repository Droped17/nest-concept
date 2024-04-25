import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Product2Service } from './product2.service';
import { CreateProduct2Dto } from './dto/create-product2.dto';
import { UpdateProduct2Dto } from './dto/update-product2.dto';

@Controller('product2')
export class Product2Controller {
  constructor(private readonly product2Service: Product2Service) {}

  @Post()
  create(@Body() createProduct2Dto: CreateProduct2Dto) {
    return this.product2Service.create(createProduct2Dto);
  }

  @Get()
  findAll() {
    return this.product2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.product2Service.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProduct2Dto: UpdateProduct2Dto,
  ) {
    return this.product2Service.update(+id, updateProduct2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.product2Service.remove(+id);
  }
}
