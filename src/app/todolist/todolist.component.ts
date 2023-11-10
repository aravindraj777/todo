import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  taskArray = [{taskName :'Brush teeth',isComplete: false}]

  constructor(){}
  ngOnInit(): void {
    
  }


  onSubmit(form:NgForm){
    console.log(form)
    this.taskArray.push({
      taskName:form.controls['task'].value,
      isComplete:false
    })
    form.reset();
  }

  onDelete(index:number){
    this.taskArray.splice(index,1)
  }

  onCheck(index:number){
    console.log(this.taskArray)

    this.taskArray[index].isComplete = !this.taskArray[index].isComplete
  }
}
