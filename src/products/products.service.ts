import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductsService {

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: CreateProductDto) {
    return this.databaseService.product.create({data: createProductDto});
  }

  async findAll() {
    return this.databaseService.product.findMany({})
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where:{
        id
      }
    })
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return this.databaseService.product.update({
      where: {
        id
      },
      data: updateProductDto
    });
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where:{
        id
      }
    });
  }
}
