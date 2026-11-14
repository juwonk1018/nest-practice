import { Injectable } from '@nestjs/common';
import { Board } from './board.model.js';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    { id: 'id', title: 'title', description: 'description', status: 'PUBLIC' },
  ];

  getAllBoards() {
    return this.boards;
  }
}
