import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-jobcard',
  standalone : true,
  imports: [DatePipe],
  templateUrl: './jobcard.html',
  styleUrl: './jobcard.css'
})
export class Jobcard {

// interface jobcardDis{

// }

  JobDiscription={
    Salary : 750000.000,
    Role : 'Developer',
    Tech : '.net',
    JoiningDate : new Date(),
    Negotiable : 15,
    imageUrl : 'assets/images/Holiday2025.png',
    Vacancy : 3

  }

  getNegotiableSalary(){
    return this.JobDiscription.Salary +(this.JobDiscription.Salary * this.JobDiscription.Negotiable / 100)
  }

}
