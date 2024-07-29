import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'src/entities/Bank.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BankService extends TypeOrmCrudService<Bank> {
  constructor(@InjectRepository(Bank) repo: Repository<Bank>) {
    super(repo)
  }
}
