import { Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { Crud, CrudController } from '@dataui/crud';
import { Account } from 'src/entities/Account.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ACCOUNT API')
@Crud({
  model: { type: Account },
  routes: {
    only: ['getOneBase', 'getManyBase']
  },
  query: {
    join: {
      bank: { eager: true },
      warning: { eager: true },
      notification: { eager: true },
      transactionGroup: { eager: true },
    }
  }
})
@Controller('search/backend/account')
export class AccountController implements CrudController<Account> {
  constructor(public readonly service: AccountService) { }
}
