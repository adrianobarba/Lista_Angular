import { Routes } from '@angular/router';
import { FormularioContatoComponent } from './paginas/formulario-contato/formulario-contato.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
<<<<<<< HEAD
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2

export const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioContatoComponent
  },
  {
<<<<<<< HEAD
    path: 'formulario/:id',
    component: FormularioContatoComponent
  },
  {
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
    path: 'lista-contatos',
    component: ListaContatosComponent
  },
  {
<<<<<<< HEAD
    path: 'perfil-contato/:id',
    component: PerfilContatoComponent
  },
  {
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
    path: '',
    redirectTo: '/lista-contatos',
    pathMatch: 'full'
  }
];
