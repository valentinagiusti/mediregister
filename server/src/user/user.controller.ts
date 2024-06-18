import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
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

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('File is required');
    }
    const fileUrl = `${file.filename}`;
    return { url: fileUrl };
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto, createUserDto.documentPhoto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    const user = await this.userService.getUserById(Number(id));
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
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
