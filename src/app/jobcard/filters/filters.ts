import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone :true,
  imports: [FormsModule],
  templateUrl: './filters.html',
  styleUrl: './filters.css'
})
export class Filters {

   @Input()
  All : number=0
   @Input()
  Available :number =0
   @Input()
 NotAvailable : number =0

 selectedRadiobutton: string='All';

 @Output()
 selectedRadiobuttonChange : EventEmitter<string> = new EventEmitter<string>();

 onSelectedRadioButtonChange(){
  //console.log(this.selectedRadiobutton)
  this.selectedRadiobuttonChange.emit(this.selectedRadiobutton);
 }



}
