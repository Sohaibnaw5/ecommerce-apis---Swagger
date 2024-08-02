import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class OrdersService {


  constructor(private readonly databaseService: DatabaseService) {}


  async create(createOrderDto: CreateOrderDto) {
    const product = await this.databaseService.product.findUnique({
      where: {id: createOrderDto.productId}
    });
    const totalPrice = product.price * createOrderDto.quantity;
    return this.databaseService.order.create({
      data:{
        ...createOrderDto,
        totalPrice
      }
    })
    
  }
  

  async findAll() {
    return this.databaseService.order.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.order.findUnique({where:{id}});
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.databaseService.order.findUnique({where:{id}});
    const product = await this.databaseService.product.findUnique({where:{id}});
    const totalPrice = product.price * order.quantity
    return this.databaseService.order.update({
      where:{id},
      data:{
        ...updateOrderDto,
        totalPrice
      }
    })
  }

  async remove(id: number) {
    return this.databaseService.order.delete({where: {id}});
  }
}