import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.sass']
})
export class StudentListComponent implements OnInit {
  studentList: Student[];
  selectedName: string;
  constructor(studentService: StudentService) {
    this.studentList = studentService.getStudents();

  }
  ngOnInit(): void {
  }

}
