import { get, post, requestBody } from "@loopback/rest";
import { repository } from "@loopback/repository";
import { CourseRepository } from "../repositories";

export class CourseController {
  constructor(
    @repository(CourseRepository.name)
    private courseRepo: CourseRepository,
  ) {}

  @get('/courses')
  async getCourses(): Promise<Array<any>> {
    const courses = await this.courseRepo.find();
    return courses;
    // if (true) {
    //   return [
    //     {
    //       id: 1,
    //       name: 'Full Stack'
    //     }
    //   ];
    // } else {
    //   throw new Error('Fail.');
    // }
  }

  @post('/courses')
  async createCourse(@requestBody() courseData: any): Promise<any> {
    await this.courseRepo.create(courseData);
  }
}
// to use
// async () => {
//   const courseCtrl = new CourseController();
//   try {
//     const courses = await courseCtrl.getCourses();
//   } catch (err) {
//     console.log("Error!", err);
//   } finally {
//     console.log("finished!!!");
//   }
// };

//another worse way to use
// const courseCtrl = new CourseController();
// courseCtrl.getCourses()
//   .then (courses => {

//   })
//   .catch(err => {

//   })
//   .finally(() => {
//     console.log("im done");
//   });
