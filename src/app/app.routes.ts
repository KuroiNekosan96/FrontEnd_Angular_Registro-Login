import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegistroComponent } from './modules/auth/registro/registro.component';
import { InicioUsuariosComponent } from './modules/usuarios/inicio-usuarios/inicio-usuarios.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {path:"",component:LoginComponent},
    {path:"registro",component:RegistroComponent},
    {path:"InicioUsuarios",component:InicioUsuariosComponent,canActivate:[authGuard]},


];
