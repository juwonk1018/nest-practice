export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;

export type BoardStatus = (typeof BoardStatus)[keyof typeof BoardStatus];
