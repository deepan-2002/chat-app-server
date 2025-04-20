import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User)
  private usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { email, username } = createUserDto;

    const emailExisting = await this.usersRepository.findOne({ where: { email } });
    if (emailExisting) {
      throw new ConflictException("Email Already Exists");
    }

    const usernameExisting = await this.usersRepository.findOne({ where: { username } });
    if (usernameExisting) {
      throw new ConflictException("Username Already Exists");
    }

    const user = this.usersRepository.create(createUserDto);

    try {
      await this.usersRepository.save(user);
      // delete user.passwordHash;
      return user;
    } catch(err) {
      console.log(err); 
      throw new InternalServerErrorException('Error Creating User');
    }

  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
