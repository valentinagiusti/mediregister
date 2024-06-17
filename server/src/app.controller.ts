import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Controller()
export class AppController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send-email')
  async sendEmail(@Body() data: { to: string; subject: string; text: string }) {
    try {
      await this.mailerService.sendMail({
        to: data.to,
        from: 'no-reply@example.com',
        subject: data.subject,
        template: './patient-created',
      });

      return { message: 'Email sent successfully' };
    } catch (error) {
      throw error;
    }
  }
}
