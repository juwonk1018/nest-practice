import { Injectable, NotFoundException } from '@nestjs/common';
import { Board } from './board.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto.js';
import { BoardStatus } from './board.js';

@Injectable()
export class boardRepository {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  save(board: Board): Promise<Board> {
    return this.boardRepository.save(board);
  }

  async getAllBoards(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOneBy({ id });

    if (!board) {
      throw new NotFoundException(`Board with id "${id}" not found`);
    }

    return board;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = await this.boardRepository.create({
      title,
      description,
      status: 'PUBLIC',
    });

    await this.save(board);

    return board;
  }

  async updateBoardById(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.save(board);

    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }
}
