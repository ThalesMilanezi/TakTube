import { getRepository } from "typeorm";
import { UserInputModel, UserModel } from "../../model/user";
import { User } from "../entity/user";

export class UserDataBase {
    async create(input: UserInputModel): Promise<UserModel>{
    const userRepository = getRepository(User);
    const userRegistration = await userRepository.save(input);
    console.log('aqui esta o usuario que deveria estar registrado',userRegistration)
    return userRegistration
    }
}