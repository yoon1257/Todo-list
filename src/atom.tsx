import { atom } from "recoil";

export interface ITodoTypes {
  id: string;
  contents: string;
  isCompleted: boolean;
}

export const inputState = atom<string>({
  key: "inputState",
  default: "",
});

export const todoState = atom<ITodoTypes[]>({
  key: "todos",
  default: [],
});
