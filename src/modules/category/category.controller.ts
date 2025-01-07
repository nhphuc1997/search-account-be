import { Controller } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/entities/Category.entity';

@ApiTags('CATEGORY API')
@Crud({
  model: { type: Category },
  routes: {
    only: ['getOneBase', 'getManyBase', 'createOneBase', 'deleteOneBase'],
  },
})
@Controller('super-market/backend/category')
export class AccountController implements CrudController<Category> {
  constructor(public readonly service: CategoryService) {}
}
