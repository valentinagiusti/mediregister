import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Mail } from './types/mail.interface';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('emailSending') private readonly emailQueue: Queue,
  ) {}

  async sendUserHasBeenCreatedEmail(data: Mail) {
    const job = await this.emailQueue.add('user-created', { data });

    return { jobId: job.id };
  }
}
