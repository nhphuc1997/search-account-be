import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionHistory } from 'src/entities/TransactionHistory';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionHistory])
  ],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule { }
