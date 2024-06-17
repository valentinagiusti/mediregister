import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { Mail } from './types/mail.interface';

@Processor('emailSending')
export class EmailProcessor {
  constructor(private readonly mailerService: MailerService) {}

  @Process('user-created')
  async sendUserHasBeenCreatedEmail(job: Job<Mail>) {
    const { data } = job;

    try {
      await this.mailerService.sendMail({
        to: data.to,
        from: data.from,
        subject: data.subject,
        template: './patient-created',
        context: {
          user: data.user,
        },
      });

    } catch (error) {
      console.error('Error sending email for job:', job.id, error);
    }
  }
}
