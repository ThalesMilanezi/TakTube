import { getRepository } from 'typeorm'
import { User, UserInput } from '../../model/user'
import { UserEntity } from '../entity/user'

export class UserDataBase {
  async create(input: UserInput): Promise<User> {
    const userRepository = getRepository(UserEntity)
    return userRepository.save(input)
  }
}
