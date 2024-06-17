export interface Mail {
  from: string;
  to: string;
  subject: string;
  [key: string]: any;
}