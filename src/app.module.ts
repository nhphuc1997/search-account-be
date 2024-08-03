import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './modules/account/account.module';
import { BankModule } from './modules/bank/bank.module';
import { TransactionHistoryModule } from './modules/transaction-history/transaction-history.module';
import { VerifyCodeModule } from './modules/verify-code/verify-code.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('APP_DB_HOST'),
        port: +config.get('APP_DB_PORT'),
        username: config.get('APP_DB_USERNAME'),
        password: config.get('APP_DB_PASSWORD'),
        database: config.get('APP_DB_DATABASE'),
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    AccountModule,
    BankModule,
    TransactionHistoryModule,
    VerifyCodeModule
  ],
})
export class AppModule { }
