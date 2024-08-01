import { Controller } from '@nestjs/common';
import { WarningService } from './warning.service';
import { Crud, CrudController } from '@dataui/crud';
import { Warning } from 'src/entities/Warning.entity';

@Controller('warning')
@Crud({
  model: { type: Warning },
  routes: { only: ['getManyBase'] },
})
export class WarningController implements CrudController<Warning> {
  constructor(public readonly service: WarningService) { }
}
