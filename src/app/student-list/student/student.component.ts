import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../student';
import {StudentService} from '../../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  student?: Student;
  @Input() id?: number;
  @Output() selected = new EventEmitter<string>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.student = this.studentService.getStudentById(this.id).pop();
  }

  select(): void {
    this.selected.emit(this.student?.name);
  }

}
