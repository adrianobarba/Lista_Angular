import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterLink } from '@angular/router';
=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2

@Component({
  selector: 'app-contato',
  standalone: true,
<<<<<<< HEAD
  imports: [
    CommonModule,
    RouterLink
  ],
=======
  imports: [CommonModule],
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {
  @Input() nome: string = ''
  @Input() telefone: string = ''
<<<<<<< HEAD
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';

=======
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
}
