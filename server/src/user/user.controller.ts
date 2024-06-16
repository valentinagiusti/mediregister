import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.getUserById(Number(id));
    if (!user) {
      throw new BadRequestException('User not found');
    } else {
      return user;
    }
  }

  @Delete(':id')
  async deleteUserById(@Param('id') id: string): Promise<User> {
    try {
      return this.userService.deleteUser(Number(id));
    } catch (error) {
      throw new BadRequestException('User does not exist');
    }
  }
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    try {
      return this.userService.updateUser(Number(id), user);
    } catch (error) {
      throw new BadRequestException('User does not exist');
    }
  }
}
