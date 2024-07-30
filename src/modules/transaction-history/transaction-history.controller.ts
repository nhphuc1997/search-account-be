import { Controller } from '@nestjs/common';
import { TransactionHistoryService } from './transaction-history.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { TransactionHistory } from 'src/entities/TransactionHistory';

@ApiTags('TRANSACTION HISTORY API')
@Crud({
  model: { type: TransactionHistory },
  routes: { only: ['getManyBase', 'getOneBase'] },
  query: {
    join: {
      retrieverAccount: { eager: true },
    }
  }
})
@Controller('transaction-history')
export class TransactionHistoryController implements CrudController<TransactionHistory> {
  constructor(public readonly service: TransactionHistoryService) { }
}
