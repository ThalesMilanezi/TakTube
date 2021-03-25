import 'reflect-metadata'
import express from 'express'
import { createConnection } from 'typeorm'
import { UserController } from './controller/user-controller'

async function server() {
  await createConnection()
  const app = express()
  const userRouter = express.Router()
  app.listen(5000, () => {
    console.log('server running')
  })
  app.use(express.json())
  userRouter.post('/user', new UserController().Register)
}
server()

// Olhando a documentação tem essa forma de criar um servidor mas não consegui fazer rodar dessa forma
// import { Server } from '@overnightjs/core'
// import { UserController } from '../src/controller/user-controller'

// export class AppServer extends Server {
//   constructor() {
//     super()
//     this.app.use(express.json())
//     this.setupControllers()
//   }

//   private setupControllers(): void {
//     const userController = new UserController()
//     userController.Register

//     super.addControllers([userController])
//   }

//   public start(port: number): void {
//     this.app.listen(process.env.PORT, () => {
//       console.log('Server listening on port: ' + port)
//     })
//   }
// }
