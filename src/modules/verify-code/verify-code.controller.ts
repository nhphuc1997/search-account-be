import { Controller } from '@nestjs/common';
import { VerifyCodeService } from './verify-code.service';
import { Crud, CrudController } from '@dataui/crud';
import { VerifyCode } from 'src/entities/VerifyCode.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("VERIFY-CODE API")
@Controller('verify-code')
@Crud({
  model: { type: VerifyCode },
  routes: { only: ['createOneBase',] },

})
export class VerifyCodeController implements CrudController<VerifyCode> {
  constructor(public readonly service: VerifyCodeService) { }
}
