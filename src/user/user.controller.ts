import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/request.dto';
import { ResponseDto } from './dto/reponse.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() requestDto: CreateUserDto): Promise<ResponseDto> {
    return this.userService.createUser(requestDto);
  }
}
