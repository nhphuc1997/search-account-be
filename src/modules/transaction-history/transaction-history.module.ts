import { Module } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistoryController } from './transaction-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from 'src/entities/Transaction.entity';
import { TransactionStatus } from 'src/entities/TransactionStatus.entity';
import { TransactionGroup } from 'src/entities/TransactionGroup.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionStatus, TransactionGroup])
  ],
  controllers: [TransactionHistoryController],
  providers: [TransactionHistoryService],
})
export class TransactionHistoryModule { }
