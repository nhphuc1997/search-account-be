import { Controller, Post } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from 'src/entities/Order.entity';

@ApiTags('ORDER API')
@Crud({
  model: { type: Order },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'updateOneBase',
      'deleteOneBase',
    ],
  },
})
@Controller('super-market/backend/order')
export class OrderController implements CrudController<Order> {
  constructor(public readonly service: OrderService) {}

  @Post('/send-order-mail')
  async sendMail() {
    return await this.service.sendMail();
  }
}
