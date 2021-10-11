import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ecom:EcomService,private router:Router) { }

  ngOnInit(): void {
  }

validate(register:any){

console.log(register.value.password);
console.log(register.value.cpassword);

if(register.value.password==register.value.cpassword)
{
  this.ecom.adduser(register.value).subscribe(data=>{
    console.log(data.message);
    alert(data.message);
    this.router.navigateByUrl("/logincomponent")
    
  });

}
else{
  alert("Passwords doesnot match!!");
}


}
}
