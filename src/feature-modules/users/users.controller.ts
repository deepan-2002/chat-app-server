import { Body, Controller, Get, Req, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/guard/auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Get('me')
    @UseGuards(AuthGuard)
    getProfile(@Req() request) {
        return this.usersService.getProfile(request.user);
    }
}
