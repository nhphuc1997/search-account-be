import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@dataui/crud';
import { ApiTags } from '@nestjs/swagger';
import { Product } from 'src/entities/Product.entity';
import { ProductService } from './product.service';

@ApiTags('PRODUCT API')
@Crud({
  model: { type: Product },
  routes: {
    only: [
      'getOneBase',
      'getManyBase',
      'createOneBase',
      'deleteOneBase',
      'updateOneBase',
    ],
  },
})
@Controller('super-market/backend/product')
export class ProductController implements CrudController<Product> {
  constructor(public readonly service: ProductService) {}
}
