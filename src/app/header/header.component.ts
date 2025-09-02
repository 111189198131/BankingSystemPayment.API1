import { Component, EventEmitter, Output } from "@angular/core";
import { SearchInput } from "./search-input/search-input";
import { Mainmenu } from "./mainmenu/mainmenu";

@Component({
    selector :'app-header',
    standalone :true,
    imports :[Mainmenu,SearchInput],
    templateUrl : './header.component.html',
    styleUrl : './header.component.css'
})


export class HeaderComponent{

 searchText:string='';
    onSearchTextChange(value:string){
        console.log(value);
this.searchText=value;
    }
    @Output()
    searchTextChange:EventEmitter<string>=new EventEmitter<string>();

    onSearchInputTextChange(value:string){
        console.log(value);
        this.searchTextChange.emit(this.searchText);
    }

}