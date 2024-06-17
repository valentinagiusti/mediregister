import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Mail } from 'src/types/mail.interface';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('emailSending') private readonly emailQueue: Queue,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async createUser(data: User): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: data,
      });

      const mailData: Mail = {
        from: 'no-reply@mediregister.com',
        to: user.email,
        subject: 'Patient Has Been Added',
        user: {
          name: `${user.firstName} ${user.lastName}`,
        },
      };

      try {
      // add email to job queue
        await this.emailQueue.add('user-created', mailData);

      } catch (queueError) {
        console.error('Error adding job to email queue:', queueError);
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(id: number, data: User): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
