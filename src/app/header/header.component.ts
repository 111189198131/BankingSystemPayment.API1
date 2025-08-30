import { Component } from "@angular/core";
import { SearchInput } from "./search-input/search-input";

@Component({
    selector :'app-header',
    standalone :true,
    imports :[SearchInput],
    templateUrl : './header.component.html',
    styleUrl : './header.component.css'
})


export class HeaderComponent{

}