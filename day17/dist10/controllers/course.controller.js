"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
let CourseController = class CourseController {
    constructor(courseRepo) {
        this.courseRepo = courseRepo;
    }
    async getCourses() {
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
    async createCourse(courseData) {
        await this.courseRepo.create(courseData);
    }
};
__decorate([
    rest_1.get('/courses'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourses", null);
__decorate([
    rest_1.post('/courses'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "createCourse", null);
CourseController = __decorate([
    __param(0, repository_1.repository(repositories_1.CourseRepository.name)),
    __metadata("design:paramtypes", [repositories_1.CourseRepository])
], CourseController);
exports.CourseController = CourseController;
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
//# sourceMappingURL=course.controller.js.map