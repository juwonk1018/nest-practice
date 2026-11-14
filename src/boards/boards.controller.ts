import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service.js';
import { type BoardStatus, type Board } from './board.model.js';
import { CreateBoardDto } from './dto/create-board.dto.js';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe.js';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoards(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardService.createBoard(createBoardDto);
  }

  @Patch('/:id/status')
  @UsePipes(ValidationPipe)
  updateBoardStatusById(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe)
    status: BoardStatus,
  ) {
    return this.boardService.updateBoardStatusById(id, status);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    return this.boardService.deleteBoard(id);
  }
}
