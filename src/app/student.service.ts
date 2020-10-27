import {Injectable} from '@angular/core';
import {Student} from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudents(): Student[] {
    return [
      {id: 1, name: 'test1', age: 18},
      {id: 2, name: 'test2', age: 19}
    ];
  }
  getStudentById(id?: number): Student[] {
    return this.getStudents().filter(student => student.id === id);
  }
}
