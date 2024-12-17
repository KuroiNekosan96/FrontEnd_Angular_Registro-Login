import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../settings/appsettings';
import { ResponseUsuario } from '../interfaces/ResponseUsuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private http=inject(HttpClient);
  private baseUrl:string=appsettings.apiURL;
  
  
  



  constructor() { }

  //va devolver una lista de usuarios
  lista():Observable<ResponseUsuario>{
      return this.http.get<ResponseUsuario>(`${this.baseUrl}Usuario/Pase`)
    }
  
}
