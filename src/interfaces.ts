export interface MethodsContextInterface {
  editColumnName: (columnId: number, newValue: string) => void;
  editCardName: (cardId: number, newValue: string) => void;
  editComment: (commentId: number, newValue: string) => void;
  addNewCard: (columnId: number, newValue: string) => void;
  addNewComment: (cardId: number, newValue: string) => void;
  addNewDecription: (cardId: number, value: string) => void;
  deleteDescription: (cardId: number) => void;
  deleteCard: (cardId: number) => void;
  deleteComment: (commentId: number) => void;
}

export interface CardsContextInterface {
  id: number;
  name: string;
  columnId: number;
  description: string;
  author: string;
  comments: number;
}

export interface CommentsContextInterface {
  id: number;
  cardId: number;
  name: string;
  text: string;
}