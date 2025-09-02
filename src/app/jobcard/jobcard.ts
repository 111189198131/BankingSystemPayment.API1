import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Onejobcard } from './onejobcard/onejobcard';
import { Filters } from './filters/filters';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-jobcard',
  standalone : true,
  imports: [Onejobcard,Filters,DatePipe,NgFor,NgStyle,NgIf],
  templateUrl: './jobcard.html',
  styleUrl: './jobcard.css'
})
export class Jobcard {

// interface jobcardDis{

// }

  //jobCardlist: string[]=['A','B','C','D','E','F'];

  // JobDiscription={
  //   Salary : 750000.000,
  //   Role : 'Developer',
  //   Tech : '.net',
  //   JoiningDate : new Date(),
  //   Negotiable : 15,
  //   imageUrl : 'assets/images/Holiday2025.png',
  //   Vacancy : 3

  // }

  jobCardlist=[
    {
        Salary : 100000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 7,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : true
    },
     {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 10,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : true
    },
     {
        Salary : 850000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 15,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : false
    },
     {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 9,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : false
    },
    {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 7,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : false
    },
     {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 10,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 0,
        OpenForApply : true
    },
     {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 15,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : false
    },
     {
        Salary : 750000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 9,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : true
    },
    {
        Salary : 780000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 7,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 1,
        OpenForApply : true
    },
     {
        Salary : 550000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 10,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 0,
        OpenForApply : true
    },
     {
        Salary : 700000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 15,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : false
    },
     {
        Salary : 200000.000,
        Role : 'Developer',
        Tech : '.net',
        JoiningDate : new Date(),
        Negotiable : 9,
        imageUrl : 'assets/images/Holiday2025.png',
        Vacancy : 3,
        OpenForApply : true
    },
  ]

 TotalCount=this.jobCardlist.length;
 AvailableCount =this.jobCardlist.filter(x =>x.OpenForApply==true).length;
 NotAvailableCount = this.jobCardlist.filter(x =>x.OpenForApply ==false).length;

  count:number=0 ;

  getNegotiableSalary(percentage :number,Salary:number){
    return Salary= Salary + (Salary * percentage / 100)
  }

  Decrement(){
    this.count--;
  }
  Increment(){
 this.count++;
  }

  selectedFilterRadioButton:string='All';
  onChangeFilter(value:string){
    console.log(value)
    this.selectedFilterRadioButton=value;  
  }

}
