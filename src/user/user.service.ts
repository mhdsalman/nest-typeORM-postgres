import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {

  }
  create(createUserDto: CreateUserDto) : Promise<User> {
    let user : User = new User()
    user.firstName = createUserDto.firstName
    user.lastName = createUserDto.lastName
    return this.userRepository.save(user);
  }

  findAll() : Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id: id});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User()
    user.firstName = updateUserDto.firstName
    user.lastName = updateUserDto.lastName
    user.id = id
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
