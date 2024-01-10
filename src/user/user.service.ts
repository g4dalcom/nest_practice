import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return '옛다! users info';
  }
}
