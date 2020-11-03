export interface StoretInterface {
  cards: {
    id: number;
    name: string;
    columnId: number;
    description: string;
    author: string;
  };
  comments: {
    id: number;
    cardId: number;
    name: string;
    text: string;
  };
}
