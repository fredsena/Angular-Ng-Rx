import { AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.css']
})
export class UsersHomeComponent implements OnInit, AfterViewInit {

  @ViewChild ('birthDateElement') birthDateElementRef: ElementRef;

  BirthDate: Date = null;  
  usersHomeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {  }
  
  ngOnInit(): void {
    //this.BirthDate = new Date();

    this.usersHomeForm = this.formBuilder.group({
      BirthDate: [null]
    })
  }

  ngAfterViewInit() {
    console.log(this.birthDateElementRef);
    this.birthDateElementRef.nativeElement.focus();
  }

  onSubmit() {
    console.log(this.usersHomeForm.value);
    console.log(this.usersHomeForm.value.BirthDate);
  }

}
