import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UsuarioComponent, MatSlideToggleModule],
  template : '<app-usuario></app-usuario>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-root';
}
