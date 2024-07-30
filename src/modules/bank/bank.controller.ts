import { Controller } from '@nestjs/common';
import { BankService } from './bank.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Bank } from 'src/entities/Bank.entity';

@ApiTags('BANK API')
@Controller('bank')
@Crud({
  model: { type: Bank },
  routes: {
    only: ['getManyBase', 'getOneBase']
  }
})
export class BankController implements CrudController<Bank> {
  constructor(public readonly service: BankService) { }
}
