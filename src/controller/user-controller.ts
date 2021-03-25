import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { UserBusiness } from '../business/user-business'
import { UserRole } from '../model/user'

@Controller('user')
export class UserController {
  @Post()
  public Register(req: Request, res: Response) {
    try {
      const { email, password, userRole } = req.body
      const userBusiness = new UserBusiness()
      const user = userBusiness.insert({ email, password, userRole: UserRole.admin})
      console.log('user aqui controller', user)
      return res.status(200).send({ user, message: 'usuario criado com sucesso' })
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  }
}
