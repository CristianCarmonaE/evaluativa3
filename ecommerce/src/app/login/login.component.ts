import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cUser = "user";
  cPwd = "user";

  alertUser!: string;
  constructor(private router: Router) { }

  formularioLogin = new FormGroup({
    user : new FormControl('', Validators.required),
    pwd : new FormControl('', Validators.required)
  });
  
  ngOnInit(): void {
  }

  validar(){
      if(this.formularioLogin.value.user == this.cUser){
        this.alertUser = "";
      }
      else{
        this.alertUser = "Usuario o password incorrecto";
      }

      if(this.formularioLogin.value.pwd == this.cPwd){
        this.alertUser = "";
      }
      else{
        this.alertUser = "Usuario o password incorrecto";
      }

      if(this.alertUser == ""){
        this.router.navigate(['productos']);
      }
  }

  get userField(){
    return this.formularioLogin.get('user');
  }

  get pwdField(){
    return this.formularioLogin.get('pwd');
  }
}
