import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Student {
  @ObjectIdColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
