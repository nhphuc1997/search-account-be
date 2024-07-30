import { Controller } from '@nestjs/common';
import { AccountService } from './account.service';
import { Crud, CrudController } from '@dataui/crud';
import { Account } from 'src/entities/Account.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ACCOUNT API')
@Controller('account')
@Crud({
  model: { type: Account },
  routes: {
    only: ['getManyBase', 'getOneBase']
  },
  query: {
    join: {
      bank: {
        eager: true
      },
    }
  }
})
export class AccountController implements CrudController<Account> {
  constructor(public readonly service: AccountService) { }
}
