export type User = {
  id?: string; //MongoDB generated id
  name: string;
  email: string;
  password: string;
};

export interface userState {
  items: User[];
  isLoading: boolean;
  error: boolean;
  item: User;
}
