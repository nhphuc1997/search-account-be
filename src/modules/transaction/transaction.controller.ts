import { Controller } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { TransactionHistory } from 'src/entities/TransactionHistory';

@ApiTags('TRANSACTION API')
@Crud({
  model: { type: TransactionHistory }
})
@Controller('transaction')
export class TransactionController implements CrudController<TransactionHistory> {
  constructor(public readonly service: TransactionService) { }
}
