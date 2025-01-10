import { Module } from '@nestjs/common';
import { PaddleController } from './paddle.controller';
import { PaddleService } from './paddle.service';

@Module({
  imports: [],
  controllers: [PaddleController],
  providers: [PaddleService],
  exports: [PaddleService],
})
export class PaddleModule {}
