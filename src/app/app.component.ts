import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmpleadoDatatableComponent } from './components/datatable/datatable.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule, EmpleadoDatatableComponent ],
  template : '<app-empleado-datatable></app-empleado-datatable>',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'app-root';
}
