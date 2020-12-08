import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {


  @ViewChild ('birthDateElement') birthDateElementRef: ElementRef;

  BirthDate: Date = null;  

  constructor() {  }
  
  ngOnInit(): void {
    this.BirthDate = new Date();
  }

  ngAfterViewInit() {
    console.log(this.birthDateElementRef);
    this.birthDateElementRef.nativeElement.focus();
  }

  onSubmit() {
 
  }

}
