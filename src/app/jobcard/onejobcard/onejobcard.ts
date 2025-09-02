import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-onejobcard',
  standalone:true,
  imports: [DatePipe,NgStyle],
  templateUrl: './onejobcard.html',
  styleUrl: './onejobcard.css'
})
export class Onejobcard {

  @Input()

  jobdisc :{
    Salary : number,
        Role : string,
        Tech : string,
        JoiningDate :Date,
        Negotiable : number,
        imageUrl : string,
        Vacancy : number,
        OpenForApply : boolean
  }
  ;

  getNegotiableSalary(percentage :number,Salary:number){
    return Salary= Salary + (Salary * percentage / 100)
  }

}
