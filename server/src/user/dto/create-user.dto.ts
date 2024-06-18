import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {

  id: number;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phoneNumber: string;

  @IsNotEmpty()
  address: string;

  documentPhoto: string;
}