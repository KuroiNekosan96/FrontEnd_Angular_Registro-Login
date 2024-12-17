import { Component, inject } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/Usuario';

@Component({
  selector: 'app-inicio-usuarios',
  imports: [MatCardModule,MatTableModule],
  templateUrl: './inicio-usuarios.component.html',
  styleUrl: './inicio-usuarios.component.css'
})
export class InicioUsuariosComponent {

  private usuarioService=inject(UsuarioService);
  public listaUsuario:Usuario[]=[]
  public displayedColumns:string[]=["nombre","email","telefono","rol","estado"]

  //Metodo para mostrar lista de usuarios
  constructor(){
    this.usuarioService.lista().subscribe({
      next:(data)=>{
        if(data.value.length>0){
          this.listaUsuario=data.value 
        }
      },
      error:(error)=>{
        console.log(error.message);
      }
    })
  }








}
