import { Controller } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Transaction } from 'src/entities/Transaction.entity';

@ApiTags('TRANSACTION HISTORY API')
@Crud({
  model: { type: Transaction },
  routes: { only: ['getManyBase', 'getOneBase'] },
  query: {
    join: {
      transactionStatus: { eager: true },
      senderBank: { eager: true },
    }
  }
})
@Controller('backend/transaction-history')
export class TransactionHistoryController implements CrudController<Transaction> {
  constructor(public readonly service: TransactionHistoryService) { }
}
