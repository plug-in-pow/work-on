import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  editForm!:FormGroup;
  status: string[] = ['Todo', 'In-Progress' , 'Completed'];
  todayDate: string = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
  @Output() hideDashBoard = new EventEmitter<boolean>(false);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      startDate: [this.todayDate],
      endDate: [''],
      status: ['Todo']
    });
  }

  saveForm() {
    this.hideDashBoard.emit(true);
  }

  exit() {
    this.hideDashBoard.emit(true);
  }

  get startDate() { return this.editForm.get('startDate'); }

}
