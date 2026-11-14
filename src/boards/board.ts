export const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;

export type BoardStatus = (typeof BoardStatus)[keyof typeof BoardStatus];
