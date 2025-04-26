import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async register(registerDto: RegisterDto): Promise<User> {
        const { password: passwordHash } = registerDto;
        return await this.usersService.create({ ...registerDto, passwordHash });
    }

    async login(loginDto: LoginDto): Promise<{
        access_token: string;
    }> {
        const { username, password } = loginDto;
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            throw new NotFoundException("No Account Found for this Username");
        }
        const isValid = await this.validatePassword(password, user.passwordHash);
        if (!isValid) {
            throw new UnauthorizedException("Incorrect Password");
        }
        const payload = { username, id: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async validatePassword(plainPassword: string, hashPassword: string) {
        return await bcrypt.compare(plainPassword, hashPassword);
    }

}
