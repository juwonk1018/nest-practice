import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service.js';
import { type BoardStatus } from './board.js';
import { CreateBoardDto } from './dto/create-board.dto.js';

import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe.js';
import { Board } from './board.entity.js';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:id/status')
  updateBoardStatusById(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe)
    status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatusById(id, status);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }
}
