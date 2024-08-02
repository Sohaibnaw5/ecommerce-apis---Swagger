import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import {  UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.', type: Product })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, description: 'Return all products.', type: [Product] })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiResponse({ status: 200, description: 'Return the product.', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a product by ID' })
  @ApiResponse({ status: 200, description: 'The product has been successfully updated.', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiResponse({ status: 200, description: 'The product has been successfully deleted.', type: Product })
  @ApiResponse({ status: 404, description: 'Product not found.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
