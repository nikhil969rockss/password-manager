import { createContext } from "react";

type Password = {
  id: number;
  site: string;
  username: string;
  password: string;
};
export interface IContext {
  form: {
    id: number;
    site: string;
    username: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {};
  handleAddPassword: () => {};
  allPasswords: Password[];
  handleEdit: (id: number) => {};
  handleDelete: (id: number) => {};
}
export type context = {};
const context = createContext<IContext | context>({});
export default context;
