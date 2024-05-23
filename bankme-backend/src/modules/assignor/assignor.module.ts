import { Module } from '@nestjs/common';
import { AssignorService } from './assignor.service';
import { AssignorController } from './assignor.controller';

@Module({
  providers: [AssignorService],
  controllers: [AssignorController]
})
export class AssignorModule {}
