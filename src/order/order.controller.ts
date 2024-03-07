import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('add')
  async addOrder(@Body() dto: CreateOrderDto) {
    return await this.orderService.create(dto);
  }
}
