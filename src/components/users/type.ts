
export type UserFilterDoneType = 'all' | 'active' | 'inactive';

export interface UserType {
  id: number;
  username: string;
  password: string;
  status?: 'active' | 'inactive';
}

