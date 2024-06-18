import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { EmailProcessor } from './email-processor';
import { UserController } from './user/user.controller';
import { PrismaModule } from './prisma/prisma.module';
import * as dotenv from 'dotenv';
import { ServeStaticModule } from '@nestjs/serve-static';
dotenv.config();

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: 'emailSending',
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAILTRAP_HOST,
        port: Number(process.env.MAILTRAP_PORT),
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@mediregister.com>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: false,
        },
      },
    }),
    PrismaModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../uploads'),
      serveRoot: '/uploads/'
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, EmailProcessor],
})
export class AppModule {}
