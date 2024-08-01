import { Controller } from '@nestjs/common';
import { WarningService } from './warning.service';
import { Crud, CrudController } from '@dataui/crud';
import { Warning } from 'src/entities/Warning.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("WARNING API")
@Controller('backend/warning')
@Crud({
  model: { type: Warning },
  routes: { only: ['getManyBase'] },
})
export class WarningController implements CrudController<Warning> {
  constructor(public readonly service: WarningService) { }
}
