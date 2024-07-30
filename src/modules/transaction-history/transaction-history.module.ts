import { Module } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistoryController } from './transaction-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionHistory } from 'src/entities/TransactionHistory';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransactionHistory])
  ],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService],
})
export class TransactionHistoryModule { }
