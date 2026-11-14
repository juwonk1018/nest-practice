import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BoardsController } from './boards/boards.controller.js';

@Module({
  imports: [],
  controllers: [AppController, BoardsController],
  providers: [AppService],
})
export class AppModule {}
