export type Category = {
  id: number;
  name: string;
};

export type Question = {
  id: number;
  question: string;
  likeCount: number;
  categories: Category[];
  comments: Comment[];
};

export type Comment = {
  id: number;
  text: string;
  email: string;
  likeCount: number;
  questionId: number;
};

export type BlogT = {
  id:number;
  title:string;
  info:{id:number, iconOrNumber:any, text:string}[]
}