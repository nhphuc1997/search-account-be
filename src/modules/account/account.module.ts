import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from 'src/entities/Account.entity';
import { Warning } from 'src/entities/Warning.entity';
import { Notification } from 'src/entities/Notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Warning, Notification])
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule { }
