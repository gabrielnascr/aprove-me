import { Controller } from '@nestjs/common';
import { PayableService } from './payable.service';

@Controller('/integrations/payable')
export class PayableController {
  constructor(private readonly payableService: PayableService) {}
}
