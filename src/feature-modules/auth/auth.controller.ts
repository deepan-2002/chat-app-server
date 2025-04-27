import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { SkipAuth } from 'src/constants/constants';

@SkipAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("sign-up")
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @Post("sign-in")
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post("send-otp")
  sendOtp(@Body('email') email: string) {
    return this.authService.sendOtp(email);
  }

  @Post("verify-otp")
  verifyOtp(@Body() body: { email: string, otp: string }) {
    return this.authService.verifyOtp(body);
  }
}
