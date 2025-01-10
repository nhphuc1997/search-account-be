import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/Order.entity';
import { Repository } from 'typeorm';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OrderService extends TypeOrmCrudService<Order> {
  private readonly mailerSend: any;

  constructor(
    @InjectRepository(Order) repo: Repository<Order>,
    private readonly configService: ConfigService,
  ) {
    super(repo);
    this.mailerSend = new MailerSend({
      apiKey: this.configService.get('APP_MAIL_API_KEY'),
    });
  }

  async sendMail() {
    const sentFrom = new Sender(
      'trial-zr6ke4nk3pe4on12.mlsender.net',
      'Super market',
    );
    const recipients = [new Recipient('phucnguyen18041997@gmail.com')];
    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject('This is a Subject')
      .setHtml('<strong>This is the HTML content</strong>')
      .setText('This is the text content');

    return await this.mailerSend.email.send(emailParams);
  }
}
