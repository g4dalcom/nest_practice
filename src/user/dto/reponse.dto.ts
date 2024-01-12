import { UserRole } from '../user.entity';

export class ResponseDto {
  username: string;
  age: number;
  role: UserRole;
}
