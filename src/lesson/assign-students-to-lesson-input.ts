import { InputType, Field, ID } from '@nestjs/graphql';
import { IsMongoId, IsUUID } from 'class-validator';
@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @Field(type => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field(type => [ID])
  studentsIds: string[];
}
