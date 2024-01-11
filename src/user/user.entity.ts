import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  MEMBER = 'member',
  GHOST = 'ghost',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 15 })
  username: string;

  @Column('int')
  age: number;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.GHOST })
  role: UserRole;
}
