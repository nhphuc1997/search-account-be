import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VerifyCode } from 'src/entities/VerifyCode.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VerifyCodeService extends TypeOrmCrudService<VerifyCode> {
  constructor(@InjectRepository(VerifyCode) repo: Repository<VerifyCode>) {
    super(repo)
  }
}
