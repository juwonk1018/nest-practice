import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model.js';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly statusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isBoardStatusValid(value)) {
      throw new BadRequestException(
        `${value} isn't in the status. The status must be 'PUBLIC' or 'PRIVATE'`,
      );
    }

    return value;
  }

  private isBoardStatusValid(status: any) {
    return this.statusOptions.includes(status);
  }
}
