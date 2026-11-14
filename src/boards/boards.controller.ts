import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service.js';
import { Board } from './board.model.js';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }
}
