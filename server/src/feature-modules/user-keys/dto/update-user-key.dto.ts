import { PartialType } from '@nestjs/mapped-types';
import { CreateUserKeyDto } from './create-user-key.dto';

export class UpdateUserKeyDto extends PartialType(CreateUserKeyDto) {}
