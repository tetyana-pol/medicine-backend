import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrderDto) {
    console.log('order', dto);
    const newOrder = await this.prisma.order.create({
      data: { ...dto, count: Number(dto.count), idDrug: Number(dto.idDrug) },
    });

    return newOrder;
  }
}
