import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller.js';
import { BoardsService } from './boards.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity.js';
import { boardRepository } from './board.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardsController],
  providers: [BoardsService, boardRepository],
})
export class BoardsModule {}
