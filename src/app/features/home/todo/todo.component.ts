import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo-service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  viewDashboard: boolean = true;
  todoList: any = [];
  hideEditForm: boolean = true;
  progressStatus: string[] = ['Todo', 'In Progress', 'Completed']

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(res => {
      this.todoList = res.matchResults;
      this.todoList.forEach((obj:any) => obj.status = this.progressStatus[obj.status])
      this.todoList.sort((a: any,b: any) => {
        if(a.isPinned){
          if(a.pinnedPosition > b.pinnedPosition){
            return 1;
          }else if(a.pinnedPosition < b.pinnedPosition){
            return -1;
          }else{
            return 0;
          }
        }
        return 0;
      })
    })
  }

  toggleView() {
    this.viewDashboard = !this.viewDashboard;
  }

  hideDashboardInParent(hide: boolean) {
    this.hideEditForm = hide;
  }

  openEditTodo() {
    this.hideEditForm = false;
  }

  pinTask(id: string) {

  }

  deleteTask(id: string) {

  }

}
