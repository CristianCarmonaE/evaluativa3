import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  usuarios: any = [];
  formulario !: FormGroup;
  errorInput = {
    'errorInput':false
  };

  constructor(private formBuilder: FormBuilder, private router: Router){
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formulario = this.formBuilder.group({
      nombre : ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
    },
    {
      validators: this.MustMatch('password', 'confirmarPassword')
    });
  }
  
  MustMatch(password: string, confirmarPassword:string){
    return (formGroup:FormGroup) =>{
      const control = formGroup.controls[password];
      const matchingControl = formGroup.controls[confirmarPassword];

      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return;
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true})
      }else{
        matchingControl.setErrors(null);
      }

    }
  }

  validar(){

  }

  agregar(event : Event){
    //event.preventDefault();
    if(this.formulario.valid){
      this.usuarios.push({ 
        nombre : this.formulario.value.nombre,
        apellido : this.formulario.value.apellido,
        rut : this.formulario.value.rut,
        email : this.formulario.value.email,
        password : this.formulario.value.password,
        confirmarPassword : this.formulario.value.confirmarPassword
      });
      this.router.navigate(['../productos']);
    }else{
      this.formulario.markAllAsTouched();
    }
  }

  get nombreField(){
    return this.formulario.get('nombre');
  }

  get apellidoField(){
    return this.formulario.get('apellido');
  }

  get rutField(){
    return this.formulario.get('rut');
  }

  get emailField(){
    return this.formulario.get('email');
  }

  get passwordField(){
    return this.formulario.get('password');
  }

  get confirmacionField(){
    return this.formulario.get('confirmarPassword');
  }

  setErrorOn(){
    this.errorInput['errorInput'] = true;
  }
  setErrorOff(){
    this.errorInput['errorInput'] = false;
  }

}
