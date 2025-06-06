export type User = {
  role: 'admin' | 'customer' | 'insurer';
  id: string;
  name: string;
  email?: string;
};

export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
};
