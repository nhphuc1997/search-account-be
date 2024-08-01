import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Warning } from 'src/entities/Warning.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WarningService extends TypeOrmCrudService<Warning> {
  constructor(@InjectRepository(Warning) repo: Repository<Warning>) {
    super(repo)
  }
}
