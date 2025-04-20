import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private readonly usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, username } = createUserDto;

    const emailExisting = await this.findByEmail(email);
    if (emailExisting) {
      throw new ConflictException("Email Already Exists");
    }

    const usernameExisting = await this.findByUsername(username);
    if (usernameExisting) {
      throw new ConflictException("Username Already Exists");
    }

    const user = this.usersRepository.create(createUserDto);

    try {
      await this.usersRepository.save(user);
      delete user.passwordHash;
      return user;
    } catch {
      throw new InternalServerErrorException('Error Creating User');
    }

  }

  async findByEmail(email: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findByUsername(username: string): Promise<User> {
    return await this.usersRepository.findOne({ where: { username } });
  }

}
