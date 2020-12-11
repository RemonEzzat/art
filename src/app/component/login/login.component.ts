import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel
  msg
  errLogin
  constructor(private fb: FormBuilder,private _user:UserService,private router: Router) { 
    this.loginModel = this.fb.group({
      email: ['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  login(){
    this._user.login(this.loginModel.value).subscribe(data=>{
      console.log(data)
      sessionStorage.setItem('token',`${data.token_type} ${data.access_token}`)
      this.router.navigate([''])
    })
 
  }

}
