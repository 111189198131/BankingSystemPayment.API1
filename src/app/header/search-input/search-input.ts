import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-search-input',
  standalone :true,
  imports: [FormsModule,NgIf],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css'
})
export class SearchInput {

  searchInput='';

  onInputChange(event: any){
   //const value =(event.target as HTMLInputElement).value;
    //console.log(event.target.value);
    this.searchInput=event.target.value;
    //this.searchInput="Maddy";
  }

  @Output()
  searchTextChange :EventEmitter <string> = new EventEmitter<string>();

  onSearchTextChange(){
    console.log(this.searchInput);
    this.searchTextChange.emit(this.searchInput);
  }

}

