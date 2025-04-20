import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserKeysService } from './user-keys.service';
import { CreateUserKeyDto } from './dto/create-user-key.dto';
import { UpdateUserKeyDto } from './dto/update-user-key.dto';

@Controller('user-keys')
export class UserKeysController {
  constructor(private readonly userKeysService: UserKeysService) {}

  @Post()
  create(@Body() createUserKeyDto: CreateUserKeyDto) {
    return this.userKeysService.create(createUserKeyDto);
  }

  @Get()
  findAll() {
    return this.userKeysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userKeysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserKeyDto: UpdateUserKeyDto) {
    return this.userKeysService.update(+id, updateUserKeyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userKeysService.remove(+id);
  }
}
