import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel
 errRegister
 msg
  constructor(  private fb: FormBuilder, 
    private _user:UserService,
    private router: Router) { 
      this.userModel= this.fb.group({
        name: ['',[ Validators.required, Validators.maxLength(20)]],
        email: [, [ Validators.required, Validators.email]],
        password: [ ,[ Validators.required, Validators.minLength(6)]],
        type:[0]
      })
    }

  ngOnInit(): void {
  }
  addUser(){
    let userData:User = this.userModel.value
    console.log(userData)
    this._user.signUp(userData).subscribe(res=>{
      console.log(res)
      this.router.navigate([''])
  })}  
}
