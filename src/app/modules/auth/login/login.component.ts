import { Component, inject } from '@angular/core';
import { AccesoService } from '../../../services/acceso.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Login } from '../../../interfaces/Login';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  private accesoService=inject(AccesoService);
  private router = inject(Router);
  public formBuild =inject(FormBuilder);

  //crear el formulario
  public formLogin: FormGroup = this.formBuild.group({
    email:['',Validators.required],
    PasswordHash:['',Validators.required]
  })

  //metodo para iniciar sesion
  iniciarSesion(){
    if(this.formLogin.invalid)return;

    const objeto:Login={
      email:this.formLogin.value.email,
      PasswordHash:this.formLogin.value.PasswordHash
    }

    this.accesoService.login(objeto).subscribe({
      next:(data)=>{
        if(data.isSuccess){
          localStorage.setItem("token",data.token)
          this.router.navigate(["InicioUsuarios"])
        }else{
          alert("Credenciales son incorrectas")
        }
      },
      error:(error)=>{
        console.log(error.message);
      }
    })

  }

  //Metodo para registrarse
  registrarse(){
    this.router.navigate(["registro"])
  }
  

}
