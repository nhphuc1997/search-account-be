import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { Category } from 'src/entities/Category.entity';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from './product.service';

@ApiTags('PRODUCT API')
@Crud({
  model: { type: Category },
  routes: {
    only: ['getOneBase', 'getManyBase'],
  },
})
@Controller('super-market/backend/product')
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) {}
}
