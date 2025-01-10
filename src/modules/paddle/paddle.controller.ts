import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PaddleService } from './paddle.service';

@ApiTags('PADDLE API')
@Controller('super-market/backend/paddle')
export class PaddleController {
  constructor(public readonly service: PaddleService) {}

  @Get('/product')
  async getProducts() {
    return await this.service.getProducts();
  }
}
