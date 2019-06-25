import { Entity } from '@loopback/repository';
export declare class Course extends Entity {
    id?: number;
    name?: string;
    [prop: string]: any;
    constructor(data?: Partial<Course>);
}
export interface CourseRelations {
}
export declare type CourseWithRelations = Course & CourseRelations;
