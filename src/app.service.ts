import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'ANS MonOrdo API\nIf you wan an account you can send an email to axel@monordo.com';
  }
}
