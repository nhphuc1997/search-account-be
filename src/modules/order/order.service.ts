import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/Order.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  private readonly client: any;

  constructor(
    @InjectRepository(Order) repo: Repository<Order>,
    private readonly configService: ConfigService,
  ) {
    super(repo);
    this.client = new Twilio(
      this.configService.get('APP_TWILIO_ACCOUNT_SID'),
      this.configService.get('APP_TWILIO_AUTH_TOKEN'),
    );
  }

  async sendSMS(orderNumber: string) {
    const message = await this.client.messages.create({
      body: `Bạn vừa có đơn hàng mới, mã đơn hàng: ${orderNumber}`,
      from: '+17174008635',
      to: `+84369270941`,
    });

    return message;
  }
}
