import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.js';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity.js';
import { boardRepository } from './board.repository.js';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: boardRepository) {}

  getAllBoards(): Promise<Board[]> {
    return this.boardRepository.getAllBoards();
  }

  getBoardById(id: number): Promise<Board> {
    return this.boardRepository.getBoardById(id);
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  updateBoardStatusById(id: number, status: BoardStatus): Promise<Board> {
    return this.boardRepository.updateBoardById(id, status);
  }

  deleteBoard(id: number): Promise<void> {
    return this.boardRepository.deleteBoard(id);
  }
}
