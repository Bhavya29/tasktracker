import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../Task';
import { Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle,NgClass } from '@angular/common';




@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle,NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
@Input() task:Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

faTimes = faTimes;

onDelete(task){
  console.log(task);
  this.onDeleteTask.emit(task);
}

onToggle(task){
  console.log(task);
  this.onToggleReminder.emit(task);
}

}
