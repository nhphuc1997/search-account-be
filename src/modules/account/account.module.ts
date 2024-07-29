import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/Account.entity';
import { TransactionHistory } from 'src/entities/TransactionHistory';
import { Bank } from 'src/entities/Bank.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, TransactionHistory, Bank])
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule { }
