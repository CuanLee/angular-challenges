import { Roles } from './enums/roles';

export type Role = 'MANAGER' | 'WRITER' | 'READER' | 'CLIENT';

export interface User {
  name: string;
  isAdmin: boolean;
  roles: Role[];
}

export const admin: User = {
  name: 'admin',
  isAdmin: true,
  roles: [],
};

export const manager: User = {
  name: 'manager',
  isAdmin: false,
  roles: [Roles.Manager],
};

export const writer: User = {
  name: 'writer',
  isAdmin: false,
  roles: [Roles.Writer],
};

export const reader: User = {
  name: 'reader',
  isAdmin: false,
  roles: [Roles.Reader],
};

export const readerAndWriter: User = {
  name: 'reader',
  isAdmin: false,
  roles: [Roles.Reader, Roles.Writer],
};

export const client: User = {
  name: 'client',
  isAdmin: false,
  roles: [Roles.Client],
};

export const everyone: User = {
  name: 'client',
  isAdmin: false,
  roles: [],
};
