import { CourseRepository } from "../repositories";
export declare class CourseController {
    private courseRepo;
    constructor(courseRepo: CourseRepository);
    getCourses(): Promise<Array<any>>;
    createCourse(courseData: any): Promise<any>;
}
