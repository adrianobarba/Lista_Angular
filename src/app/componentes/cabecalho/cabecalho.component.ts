<<<<<<< HEAD
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
=======
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2

@Component({
  selector: 'app-cabecalho',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, RouterLink],
=======
  imports: [CommonModule],
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
<<<<<<< HEAD
  @Input() titulo: string = '';
  @Input() bannerSrc: string = '';
  @Input() telaInicial: boolean = false;
}

=======

}
>>>>>>> e589f8ce0999bee9a7bbd396e15fa59b1a1bc8d2
