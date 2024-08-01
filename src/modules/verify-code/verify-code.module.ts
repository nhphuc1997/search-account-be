import { Module } from '@nestjs/common';
import { VerifyCodeService } from './verify-code.service';
import { VerifyCodeController } from './verify-code.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VerifyCode } from 'src/entities/VerifyCode.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([VerifyCode])
  ],
  controllers: [VerifyCodeController],
  providers: [VerifyCodeService],
})
export class VerifyCodeModule { }
