import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BoardsController } from './boards/boards.controller.js';
import { BoardsService } from './boards/boards.service.js';

@Module({
  imports: [],
  controllers: [AppController, BoardsController],
  providers: [AppService, BoardsService],
})
export class AppModule {}
