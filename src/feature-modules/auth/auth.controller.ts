import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  register(@Body() registerDto:RegisterDto){
    return this.authService.register(registerDto)
  }

  @Post("sign-in")
  login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto)
  }
}
