import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

interface Empleado {
  id: number;
  name: String;
  jobTitle: String;
  department: String;
}

@Component({
  standalone: true,
  selector: 'app-empleado-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  imports: [MatTableModule]
})
export class EmpleadoDatatableComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService) {}

  ngOnInit(): void {
    this.empleadosService.getEmpleados().subscribe((data) => {
      this.empleados = data;     
    
    });
  }
}