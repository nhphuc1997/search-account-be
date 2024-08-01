import { Module } from '@nestjs/common';
import { WarningService } from './warning.service';
import { WarningController } from './warning.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Warning } from 'src/entities/Warning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Warning])],
  controllers: [WarningController],
  providers: [WarningService],
})
export class WarningModule { }
