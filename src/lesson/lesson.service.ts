import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonInput } from './create-lesson.input';
@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { endDate, name, startDate } = createLessonInput;

    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }

  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOne(id);
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
}
