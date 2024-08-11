import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/entities/Transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionHistoryService extends TypeOrmCrudService<Transaction> {
  constructor(@InjectRepository(Transaction) repo: Repository<Transaction>) {
    super(repo)
  }
}
