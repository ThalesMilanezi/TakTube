export interface UserModel {
  id: string
  email: string
  password: string
  userRole: UserRole
}

export interface UserInputModel {
  email: string
  password: string
  userRole: UserRole
}

export enum UserRole {
	admin,
	normal
}
