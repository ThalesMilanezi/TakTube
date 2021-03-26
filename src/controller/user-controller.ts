import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'
import { UserDataBase } from '../data/db/user-database'

@Controller('register')
export class UserController {
  @Post()
  public register(req: Request, res: Response) {
    try {
      const { email, password } = req.body
      const userDatabase = new UserDataBase()
      const user = userDatabase.create({ email, password})
      return res.status(200).send({ user, message: 'usuario criado com sucesso' })
    } catch (err) {
      res.status(400).send({ message: err.message })
    }
  }
}
