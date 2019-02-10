import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // declaration
  // Section -1
  addName: string = "Hello";
  changeColor: boolean = false;
  btnText: string = "Click Next";

  // Section - 2
  addNameSecond: string = 'Second'
  changeColorSecond: boolean = false;
  btnNextSecond: string = 'Click Second Next'
  
  constructor() {}

  ngOnInit() {}

  changeTitle = () => {
    if (this.changeColor) {
      this.changeColor = false;
      this.addName = "Hello";
      this.btnText = "Click Next";
    } else {
      this.changeColor = true;
      this.addName = " Good Morning";
      this.btnText = "Click Back";
    }
  };

  changeTitleSecond = () => {
    if(this.changeColorSecond){
      this.changeColorSecond = false;
      this.addNameSecond ="Second";
      this.btnNextSecond = "Click Second Next";
    }else{
      this.changeColorSecond = true;
      this.addNameSecond = " Good Morning";
      this.btnNextSecond = "Click Second Back";
    }
  };
}
