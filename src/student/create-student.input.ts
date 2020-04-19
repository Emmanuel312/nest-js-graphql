import { MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentInput {
  @Field()
  @MinLength(1)
  firstName: string;

  @Field()
  @MinLength(1)
  lastName: string;
}
