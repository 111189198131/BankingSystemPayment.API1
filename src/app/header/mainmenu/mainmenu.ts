import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mainmenu',
  standalone:true,
  imports: [NgFor],
  templateUrl: './mainmenu.html',
  styleUrl: './mainmenu.css'
})
export class Mainmenu {
 menuList: string[]=["Home","Contact","AboutUs"];
}
