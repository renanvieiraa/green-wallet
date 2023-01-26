export type Transaction = {
  id: number;
  description: string;
  date: string | Date;
  category: number | string;
  value: number;
};

export type Category = {
  id: number;
  name: string;
};
