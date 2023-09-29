import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit, OnChanges {

  editForm!:FormGroup;
  status: string[] = ['Todo', 'In Progress' , 'Completed'];
  todayDate: string = '';
  @Output() hideDashBoard = new EventEmitter<boolean>(false);
  @Input() todoData:any = {}

  constructor(private fb: FormBuilder) { }

  ngOnChanges(): void {
      if(this.editForm === undefined){
        this.createForm();
      }
      if(Object.keys(this.todoData).length > 0){
        let record = {
          title: this.todoData.title,
          description: this.todoData.description,
          status: this.todoData.status,
          startDate: this.todoData.startDate,
          endDate: this.todoData.endDate,
        }
        this.editForm.patchValue(record);
      }
    }
    
    ngOnInit(): void {
      if(Object.keys(this.todoData).length === 0){
        this.todayDate = new Date().toISOString().split('T')[0];
      }
      if(this.editForm === undefined){
        this.createForm();
      }
  }

  createForm() {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      startDate: [new Date().toISOString().split('T')[0]],
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
  get statusField() { return this.editForm.get('status'); }

}
