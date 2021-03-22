export interface User {
  id: string
  email: string
  password: string
}

export enum UserRoler {
	admin,
	normal
}
