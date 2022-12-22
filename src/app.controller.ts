import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getBotDialog(@Res() res) {
    this.appService.botMessage();
    res.status(HttpStatus.OK).send("Bot service started");
  }
}
