import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { BankController } from './bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bank } from 'src/entities/Bank.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Bank])
  ],
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule { }
