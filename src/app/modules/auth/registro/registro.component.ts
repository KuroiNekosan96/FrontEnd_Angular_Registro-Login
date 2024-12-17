import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccesoService } from '../../../services/acceso.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../interfaces/Usuario';


import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-registro',
  imports: [MatCardModule,MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

    private accesoService=inject(AccesoService);
    private router = inject(Router);
    public formBuild =inject(FormBuilder);
  
    //crear el formulario para registrar
    public formRegistro: FormGroup = this.formBuild.group({
      nombre:['',Validators.required],
      email:['',Validators.required],
      telefono:['',Validators.required],
      PasswordHash:['',Validators.required],
      rol:['',Validators.required],
      estado:['',Validators.required]
    })

    //Metodo de registrar
    registrarse(){

       if(this.formRegistro.invalid)return;

       const objeto:Usuario={
        nombre:this.formRegistro.value.nombre,
        email:this.formRegistro.value.email,
        telefono:this.formRegistro.value.telefono,
        PasswordHash:this.formRegistro.value.PasswordHash,
        rol:this.formRegistro.value.rol,
        estado:this.formRegistro.value.estado,
        FechaCreacion:this.formRegistro.value.FechaCreacion
      
      }
      //vamos a ejecutar el servicio
      this.accesoService.registrarse(objeto).subscribe({
        next:(data)=>{
          if(data.isSuccess){
            this.router.navigate([""])
          }else{
            alert("No se pudo registrar mi so")
          }
        },error:(error)=>{
          console.log(error.message);
        }
      })

      
    }

    volver(){
      this.router.navigate([""])
    }

}
