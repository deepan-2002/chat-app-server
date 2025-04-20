import { Module } from '@nestjs/common';
import { UserKeysService } from './user-keys.service';
import { UserKeysController } from './user-keys.controller';

@Module({
  controllers: [UserKeysController],
  providers: [UserKeysService],
})
export class UserKeysModule {}
