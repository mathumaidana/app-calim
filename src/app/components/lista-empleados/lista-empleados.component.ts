import { Component } from '@angular/core';
import empleadosJson from '../../../assets/data/empleados.json';
import { MatTableModule } from '@angular/material/table';
import { EmpleadosService } from '../../services/empleados/empleados.service';

interface Empleado{
  id: number;
  name: String;
  jobTitle: String;
  department: String;
}

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.scss'
})


export class ListaEmpleadosComponent {
  constructor(
    private empleadoService: EmpleadosService
  ){}
  empleados: Empleado[] = empleadosJson;
  displayedColumns: string[]=['id','name', 'jobtitle', 'department']
  dataSource=this.empleadoService.getEmpleados().subscribe()
}
