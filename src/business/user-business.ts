import { UserDataBase } from '../data/db/user-database'
import { UserInputModel, UserModel } from '../model/user'

export class UserBusiness {
  async insert(input: UserInputModel): Promise<UserModel> {
    const userDataBase = new UserDataBase()
    const user = userDataBase.create(input)
    return user
  }
}
