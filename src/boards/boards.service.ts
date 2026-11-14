import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model.js';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  getBoardById(id: string): Board {
    const board = this.boards.find((board) => board.id === id);
    if (!board) {
      throw new NotFoundException(`Board with id "${id}" not found`);
    }

    return board;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: 'PUBLIC',
    };

    this.boards.push(board);
    return board;
  }

  updateBoardStatusById(id: string, status: BoardStatus): Board | undefined {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }

  deleteBoard(id: string): void {
    const board = this.getBoardById(id);

    if (!board) {
      throw new NotFoundException(`Board with id "${id}" not found`);
    }

    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
