import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionHistory } from 'src/entities/TransactionHistory';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionHistoryService extends TypeOrmCrudService<TransactionHistory> {
  constructor(@InjectRepository(TransactionHistory) repo: Repository<TransactionHistory>) {
    super(repo)
  }
}
