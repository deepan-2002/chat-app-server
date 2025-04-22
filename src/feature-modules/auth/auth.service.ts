import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async register(createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto);
    }

    async login(loginDto: LoginDto) {
        const { username, password } = loginDto;
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            throw new NotFoundException("No Account Found for this Username");
        }
        const isValid = await this.validatePassword(password, user.passwordHash);

        if (!isValid) {
            throw new UnauthorizedException("Incorrect Password");
        }
        return { msg: "Logged In" };
    }

    async validatePassword(plainPassword: string, hashPassword: string) {
        return await bcrypt.compare(plainPassword, hashPassword);
    }

}
