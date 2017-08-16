import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
	public user = {
		username:"",
		email:"",
		password:"",
		confirmpassword:"",
		phone:"",
		city:"",
		state:"",
		district:"",
		address:"",
		pincode:""
	};
  constructor() { }

  ngOnInit() {
  }
  register()
  {

  }
   _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
}

}
