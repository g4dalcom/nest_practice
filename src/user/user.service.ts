import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/request.dto';
import { ResponseDto } from './dto/reponse.dto';
import { UserRole } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async createUser(@Body() requestDto: CreateUserDto): Promise<ResponseDto> {
    const user = this.userRepository.create(requestDto);
    this.userRepository.save(user);

    const response = { ...user, role: UserRole.GHOST };

    return response;
  }
}
