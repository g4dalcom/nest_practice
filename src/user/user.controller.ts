import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get('/all')
  getUsers(): Promise<ResponseDto[]> {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string): Promise<ResponseDto> {
    return this.userService.getUser(Number(id));
  }
}
