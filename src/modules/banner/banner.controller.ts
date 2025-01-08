import { Controller } from '@nestjs/common';
import { BannerService } from './banner.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/entities/Category.entity';
import { Banner } from 'src/entities/Banner.entity';

@ApiTags('BANNER API')
@Crud({
  model: { type: Category },
  routes: {
    only: ['getManyBase', 'createOneBase', 'deleteOneBase', 'updateOneBase'],
  },
})
@Controller('super-market/backend/banner')
export class BannerController implements CrudController<Banner> {
  constructor(public readonly service: BannerService) {}
}
