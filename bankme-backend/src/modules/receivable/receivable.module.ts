import { Module } from '@nestjs/common';
import { ReceivableService } from './receivable.service';
import { ReceivableController } from './receivable.controller';

@Module({
  providers: [ReceivableService],
  controllers: [ReceivableController]
})
export class ReceivableModule {}
