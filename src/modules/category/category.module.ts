import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { AccountController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from 'src/entities/Account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [AccountController],
  providers: [CategoryService],
})
export class CategoryModule {}
