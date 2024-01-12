import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/request.dto';
import { ResponseDto } from './dto/reponse.dto';
import { UserRole } from './user.entity';

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

  @Patch('/:id')
  updateUserRole(
    @Param('id') id: string,
    @Body('role') role: UserRole,
  ): Promise<ResponseDto> {
    return this.userService.updateUser(Number(id), role);
  }
}
