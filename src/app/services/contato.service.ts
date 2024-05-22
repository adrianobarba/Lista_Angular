import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

<<<<<<< HEAD
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}
=======
  private readonly API = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) {

  }
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  salvarContato(contato: Contato) {
    return this.http.post<Contato>(this.API, contato)
  }
<<<<<<< HEAD

  buscarPorId(id: number): Observable<Contato>{
    const url = `${this.API}/${id}`
    return this.http.get<Contato>(url)
  }

  excluirContato(id: number): Observable<Contato>{
    const url = `${this.API}/${id}`
    return this.http.delete<Contato>(url)
  }

  editarContato(contato: Contato): Observable<Contato>{
    const url = `${this.API}/${contato.id}`
    return this.http.put<Contato>(url, contato)
  }

  editarOuSalvarContato(contato: Contato): Observable<Contato> {
    if(contato.id) {
      return this.editarContato(contato)
    } else {
      return this.salvarContato(contato)
    }
  }
}
=======
}

>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
