import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { Order } from 'src/entities/Order.entity';
import { OrderService } from './order.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Order]), ConfigModule],
  controllers: [OrderController],
  providers: [OrderService, ConfigService],
})
export class OrderModule {}
