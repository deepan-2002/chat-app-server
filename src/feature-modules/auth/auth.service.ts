import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { OtpService } from './mail/otp.service';
import { MailService } from './mail/mail.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly otpService: OtpService,
        private readonly mailService: MailService,
    ) { }

    async register(registerDto: RegisterDto): Promise<User> {
        const { password: passwordHash } = registerDto;
        return await this.usersService.create({ ...registerDto, passwordHash });
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
        console.log(user);
        if (!user.is_verified) {
            return this.sendOtp(user.email);
        }
        const payload = { username, id: user.id, email: user.email };
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }

    async validatePassword(plainPassword: string, hashPassword: string) {
        return await bcrypt.compare(plainPassword, hashPassword);
    }

    async sendOtp(email: string) {
        const otp = this.otpService.generateOtp(email);
        console.log(otp);
        // await this.mailService.sendOtp(email, otp);
        return { message: 'OTP sent' };
    }

    async verifyOtp({ email, otp }: { email: string; otp: string }) {
        const isValid = this.otpService.verifyOtp(email, otp);
        if (!isValid) return { message: 'Invalid or expired OTP' };
        return await this.usersService.verifyUser(email);
    }

}
