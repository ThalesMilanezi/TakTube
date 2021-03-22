import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRoler } from '../../model/user';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  userRole!: UserRoler
}
