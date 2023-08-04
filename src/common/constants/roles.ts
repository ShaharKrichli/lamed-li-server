export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  TEACHER = 'TEACHER',
  AUTH_PROCESS = 'AUTH_PROCESS',
  RESET_PASSWORD = 'RESET_PASSWORD',
}

export type ROLE_LITERALS = keyof typeof Role;

