import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/integrations/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
}
