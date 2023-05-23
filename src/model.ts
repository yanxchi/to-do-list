import * as Datetime from "react-datetime";

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface Diary {
  id: number;
  content: string;
  time: number;
}
