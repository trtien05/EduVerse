'use server'
import Course from "@/database/course.model";
import Lecture from "@/database/lecture.model";
import Lesson from "@/database/lesson.model";
import { connectToDatabase } from "@/lib/mongoose"
import { TCreateLessonParams, TUpdateLessonParams } from "@/types";
import { revalidatePath } from "next/cache";

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findById(params.course);
    if (!findCourse) return;
    const findLecture = await Lecture.findById(params.lecture);
    if (!findLecture) return;
    const newLesson = await Lesson.create(params);
    findLecture.lessons.push(newLesson._id);
    findLecture.save();
    revalidatePath(params.path || "/");
    if (!newLesson) return
    return {
      success: true
    }
  } catch (error) {
    console.log(error)
  }
}

export async function updateLesson(params: TUpdateLessonParams) {
  try {
    connectToDatabase();
    const res = await Lesson.findByIdAndUpdate(
      params.lessonId,
      params.updateData,
      {
        new: true
      }
    )
    revalidatePath(params.updateData.path || "/");
    if (!res) {
      return
    }
    return {
      success: true
    }
  } catch (error) {
    console.log(error)
  }
}