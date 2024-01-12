import { Body, Injectable, NotFoundException } from '@nestjs/common';
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
    await this.userRepository.save(user);

    const response = { ...user, role: UserRole.GHOST };

    return response;
  }

  async getUsers(): Promise<ResponseDto[]> {
    const user = await this.userRepository.find();

    return user;
  }

  async getUser(id: number): Promise<ResponseDto> {
    const user = await this.userRepository.findOneBy({ id: id });

    if (!user) {
      throw new NotFoundException(`${id} 회원은 존재하지 않습니다.`);
    }

    return user;
  }

  async updateUser(id: number, role: UserRole): Promise<ResponseDto> {
    const user = await this.userRepository.findOneBy({ id: id });
    user.role = role;
    await this.userRepository.save(user);

    return user;
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
