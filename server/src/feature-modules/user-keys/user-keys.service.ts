import { Injectable } from '@nestjs/common';
import { CreateUserKeyDto } from './dto/create-user-key.dto';
import { UpdateUserKeyDto } from './dto/update-user-key.dto';

@Injectable()
export class UserKeysService {
  create(createUserKeyDto: CreateUserKeyDto) {
    return 'This action adds a new userKey';
  }

  findAll() {
    return `This action returns all userKeys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userKey`;
  }

  update(id: number, updateUserKeyDto: UpdateUserKeyDto) {
    return `This action updates a #${id} userKey`;
  }

  remove(id: number) {
    return `This action removes a #${id} userKey`;
  }
}
