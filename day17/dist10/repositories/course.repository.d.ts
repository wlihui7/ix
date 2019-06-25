import { DefaultCrudRepository } from '@loopback/repository';
import { Course, CourseRelations } from '../models';
import { DbDataSource } from '../datasources';
export declare class CourseRepository extends DefaultCrudRepository<Course, typeof Course.prototype.id, CourseRelations> {
    constructor(dataSource: DbDataSource);
}
